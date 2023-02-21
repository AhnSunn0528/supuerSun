//import fs from 'fs';
const fs = require('fs');

let text = '파일 쓰기 테스트';
fs.writeFile('./sample/test2-1.txt', text, 'utf8', (err) => {
    if (err) {
        throw err;
    }
    console.log('비동기적 파일 쓰기 완료');
})

fs.writeFileSync('./sample/test2.txt', text, 'utf8');
console.log('동기적 파일 쓰기 테스트 완료');