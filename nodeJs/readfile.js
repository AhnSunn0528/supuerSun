import fs from 'fs';

fs.readFile('./sample/test.txt', 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
});

let text = fs.readFileSync('./sample/test.txt', 'utf-8');
console.log(text);