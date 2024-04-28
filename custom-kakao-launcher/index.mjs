import { spawn } from 'node:child_process'
import { parseArgs } from 'node:util'
import fs from 'node:fs'
import HttpClient from './http-client.mjs'

const STORE_FILE = './store.json'

const accounts = JSON.parse(fs.readFileSync('./accounts.json', 'utf-8'))

const args = parseArgs({ allowPositionals: true })

if (args.positionals.length < 1) {
    console.error('Account not specified')
    process.exit(1)
}

if (!(args.positionals[0] in accounts)) {
    console.error('Invalid account name')
    process.exit(1)
}

const account = accounts[args.positionals[0]]

const store = fs.existsSync(STORE_FILE) ? JSON.parse(fs.readFileSync(STORE_FILE, 'utf-8')) : {}
const accountStore = store[account.username] ?? { accessToken: null, cookieJar: null }

const accessTokenInfo = accountStore.accessToken

let accessToken = null
if (accessTokenInfo && +new Date() < accessTokenInfo.expires) {
    accessToken = accessTokenInfo.token
} else {
    const client = new HttpClient({ cookieJar: accountStore.cookieJar })

    let resp3 = await client.fetch('https://login.playkakaogames.com/oauth/authorize?client_id=aa-launcher&response_type=code&redirect_uri=https://archeage-launcher.playkakaogames.com/oauth/callback')
    for await (const chunk of resp3.body) {
        // force consumption of body
    }

    if (!resp3.headers['location'].startsWith('https://archeage-launcher.playkakaogames.com/oauth/callback')) {
        const resp2 = await client.fetch('https://login.playkakaogames.com/perform_login', {
            method: 'POST',
            form: {
                steamId: '',
                socialType: '',
                socialId: '',
                name: '',
                profileImageUrl: '',
                ...account,
            },
            headers: {
                referer: 'https://login.playkakaogames.com'
            }
        })
        for await (const chunk of resp2.body) {
            // force consumption of body
        }
        resp3 = await client.fetch('https://login.playkakaogames.com/oauth/authorize?client_id=aa-launcher&response_type=code&redirect_uri=https://archeage-launcher.playkakaogames.com/oauth/callback')
        for await (const chunk of resp3.body) {
            // force consumption of body
        }
    }

    const playToken = new URL(resp3.headers['location']).searchParams.get('code')

    accountStore.cookieJar = client.getCookieJar()

    const now = new Date()
    const resp4 = await client.fetch('https://login.playkakaogames.com/oauth/token', {
        method: 'POST',
        auth: {
            'username': 'aa-launcher',
            'password': 'MFQUYYLVNZRWQZLSJRUXMZI',
        },
        headers: {
            'user-agent': 'ARCHEAGE_LAUNCHER'
        },
        form: {
            'grant_type': 'authorization_code',
            'code': playToken
        },
        noCookie: true
    })

    const resp4Data = await resp4.body.json()
    accessToken = resp4Data.access_token

    accountStore.accessToken = {
        token: accessToken,
        expires: now.setUTCSeconds(now.getUTCSeconds() + resp4Data.expires_in - 60)
    }

    store[account.username] = accountStore

    fs.writeFileSync(STORE_FILE, JSON.stringify(store, null, 2))

    await client.close()
}

const path = `C:\\KakaoGames\\ArcheAge\\bin64\\archeage.exe`

const subprocess = spawn(
    path,
[
    '-t',
    '+auth_ip', '5.79.111.100',
    '-auth_port', '1237',
    '-authtoken', accessToken,
    '-lang', 'en_us',
    '-time_offset', '-180'
], {
    detached: true,
    stdio: 'ignore'
})

subprocess.unref()
