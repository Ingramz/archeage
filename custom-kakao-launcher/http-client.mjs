import { FormData } from 'undici'
import { CookieJar } from 'tough-cookie'
import { CookieClient } from 'http-cookie-agent/undici'

const HttpClient = class {
    constructor({ cookieJar }) {
        const jar = cookieJar ? CookieJar.deserializeSync(cookieJar) : new CookieJar()
        this.cookieJar = jar
        this.client = new CookieClient('https://login.playkakaogames.com', {
            cookies: { jar },
        })
    }

    fetch(path, opts = {}) {
        const fetchOpts = {
            method: 'GET',
            path
        }

        if (opts.form && opts.method === 'POST') {
            const fd = new FormData()

            Object.entries(opts.form).forEach(([key, value]) => {
                fd.append(key, value)
            })

            fetchOpts.body = fd
        }

        if (opts.method) {
            fetchOpts.method = opts.method
        }

        if (opts.headers) {
            fetchOpts.headers = Object.fromEntries(Object.entries(opts.headers).map(([k, v]) => [k.toLowerCase(), v]))
        }

        if (opts.auth) {
            if (!fetchOpts.headers) {
                fetchOpts.headers = {}
            }

            const basicAuth = Buffer.from(`${opts.auth.username}:${opts.auth.password}`, 'utf-8').toString('base64')
            fetchOpts.headers.authorization = `Basic ${basicAuth}`
        }

        if (opts.noCookie) {
            const cookieJar = this.cookieJar

            const clone = cookieJar.cloneSync()

            cookieJar.removeAllCookiesSync()

            return this.client.request(fetchOpts).finally(() => {
                clone.cloneSync(cookieJar.store)
            })
        }

        return this.client.request(fetchOpts)
    }

    close() {
        return this.client.close()
    }

    getCookieJar() {
        return this.cookieJar.serializeSync()
    }
}

export default HttpClient
