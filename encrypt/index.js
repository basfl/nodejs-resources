const path = require('path')
const fs = require('fs');
const crypto = require('crypto');


const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
const p = path.join(__dirname, 'file', 'file.txt');
//console.log("******path", p)

const getData = (callback) => {
    fs.readFile(p, (err, data) => {
        console.log("data****", data.toString())
        callback(data.toString())
    })
}





encrypt = (text) => {
    let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
}

decrypt = (text) => {
    let iv = Buffer.from(text.iv, 'hex');
    let encryptedText = Buffer.from(text.encryptedData, 'hex');
    let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}

getData(data => {
    console.log("inside callback", data)
    console.log(encrypt(data))
    const enc=encrypt(data)
    console.log(decrypt(enc).replace("decrept "))
})