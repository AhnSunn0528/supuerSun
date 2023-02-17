const express = require('express');
var figlet = require('figlet');
var cors = require('cors');
var fs = require('fs');

const app = express();
app.use(cors());

const port = 8080;

app.get('/', function(req, res) {
    res.send('Hello World');
})

app.get('/main', function(req, res) {
    fs.readFile('index.html', function(error, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        //console.log(data);
        res.end(data);
    })
})

app.get('/dog', function(req, res) {
    res.send({ 'sound': '멍멍' });
})

app.get('/cat', function(req, res) {
    res.json({ 'sound': '야옹' });
})

app.get('/user/:id', function(req, res) {
    const p = req.params;
    console.log(p.id);

    const q = req.query;
    console.log(q);

    if (p.id === 'cat' || q.id === 'cat') {
        res.json({ 'sound': '야옹' })
    } else {
        res.json({ 'sound': '알수없으' })
    }
})

app.get('/sound/:name', function(req, res) {
    const { name } = req.params;
    res.json({ 'sound': name });
})

app.listen(port, () => {
    figlet('Node Js Template', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
    });
    console.log(`Example app listening on port ${port}`);
});