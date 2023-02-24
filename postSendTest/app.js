const express = require('express');
var figlet = require('figlet');
var cors = require('cors');
var fs = require('fs');
const { urlencoded } = require('body-parser');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true })); // post시 body영역을 가져올 수 있도록 내장함수를 사용

const port = 8080;

app.get('/main', function(req, res) {
    fs.readFile('index.html', function(error, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
});

app.post('/express', function(req, res) {
    console.log("body :: ", req.body);
    //res.send('POST 전송입니다.');

    //res.set({ 'content-type': 'application/json; charset=utf-8' });
    res.charset = 'utf8';
    res.json(req.body);
});

app.listen(port, () => {
    figlet('Node Js POST SEND Template', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
    });
    console.log(`Example app listening on port ${port}`);
});