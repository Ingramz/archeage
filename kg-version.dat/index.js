const assert = require('assert')
const crypto = require('crypto')

const KEY = Buffer.from('Archeage!(*!', 'ascii')

function encrypt(text) {
    const padding = 8 - (text.length % 8)

    const textbuf = Buffer.allocUnsafe(text.length + padding)
    textbuf.write(text, 'ascii')
    textbuf.fill(padding, text.length)
    textbuf.swap32()

    const cipher = crypto.createCipheriv('bf-ecb', KEY, null)
    cipher.setAutoPadding(false)

    return Buffer.concat([cipher.update(textbuf), cipher.final()])
        .swap32()
        .toString('hex')
}

function decrypt(ciphertext) {
    const textbuf = Buffer.from(ciphertext, 'hex').swap32()

    const decipher = crypto.createDecipheriv('bf-ecb', KEY, null)
    decipher.setAutoPadding(false)

    const decrypted = Buffer.concat([decipher.update(textbuf), decipher.final()]).swap32()

    let padding = decrypted.at(-1)

    assert(padding >= 1 && padding <= 8)

    return decrypted.toString('ascii', 0, decrypted.length - padding)
}

console.log(decrypt(`686860d0fd604455`))
console.log(encrypt(`175`))
console.log(encrypt(`176`))
