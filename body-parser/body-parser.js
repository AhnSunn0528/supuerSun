var express = require('express');
var cors = require('cors');
// var bodyParser = require('body-parser');
// const { urlencoded } = require('express');

var app = express();
app.use(cors());
//app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
//const jsonParser = express.json();
//const urlencodedParser = express.urlencoded({ extended: false });

app.listen(8888, () => {
    console.log('Server started. port 8888.');
});

// parse application/json
// app.use(bodyParser.json(
//     // { limit: '50mb' }
// ));

// app.post('/login', urlencodedParser, function(req, res) {
//     console.log('request:: {} ', req);
//     res.send('welcome, ' + req.body.userName);
// });

app.post('/tester', function(req, res) {
    console.log('request :: {} ', req);
    //res.send(await req.body);
})