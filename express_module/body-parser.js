var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();
const jsonParser = express.json();
const urlencodedParser = express.urlencoded({ extended: false });

app.get('/', (req, res) => {
    var formPage = fs.readFileSync('form.html', 'utf-8');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(formPage);
})

app.post('/login', urlencodedParser, function(req, res) {
    console.log('request :: {} ', req.body);
    res.json(req.body);
})

app.post('/api/user', jsonParser, function(req, res) {
    console.log('request :: {} ', req);
    //res.send(req.body);
})

app.listen(8080, () => {
    console.log('Server started. port 8080.');
})