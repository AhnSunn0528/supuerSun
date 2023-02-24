const express = require('express');
//const router = express.Router();
const app = express();

app.listen(3000);

app.use(express.json({ limit: '50mb' }))
app.get('/', function(req, res) {
    res.send('customer 라우트 루트');
})

app.post('/customer', function(req, res) {
    console.log(req.body.param);
    res.send(req.body.param);
});

// router.post('/insert', function(req, res) {
//     res.send('/customer/insert 라우트 경로');
// })

// router.put('/update', function(req, res) {
//     res.send('/customer/update 라우트 경로');
// })

// router.delete('/delete', function(req, res) {
//     res.send('/customer/delete 라우트 경로');
// })

//module.exports = router;