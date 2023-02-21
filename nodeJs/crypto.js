const crypto = require('crypto');
//import crypto from 'crypto';

console.log('base64 :', crypto.createHash('sha512').update('pw1234').digest('base64')); // sha512- base64방법으로 pw1234를 암호화
console.log('hex: ', crypto.createHash('sha512').update('pw1234').digest('hex')); // sha512- hex방법으로 pw1234를 암호화

const createSalt = () => {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(64, (err, buf) => {
            if (err) reject(err);
            //console.log('salt : ', buf.toString("base64"));
            resolve(buf.toString("base64"));
        });
    });
};
//createSalt();

const createCryptoPassword = async(plainPassword) => {
    const salt = await createSalt(); // salt생성

    return new Promise((resolve, reject) => {
        crypto.pbkdf2(plainPassword, salt, 100000, 64, "sha512", (err, key) => {
            if (err) reject(err);
            //console.log('password by base64 with salt: ', { password: key.toString("base64"), salt });
            resolve({ password: key.toString("base64"), salt });
        });
    })
};
//createCryptoPassword('pw1234');

const getCryptoPassword = (plainPassword, salt) => {
    return new Promise((resolve, reject) => {
        crypto.pbkdf2(plainPassword, salt, 9999, 64, "sha512", (err, key) => {
            if (err) reject(err);
            console.log('password by getCryptoPassword: ', { password: key.toString("base64"), salt });
            resolve({ password: key.toString("base64"), salt });
        });
    });
}
getCryptoPassword('pw12222', '1111');