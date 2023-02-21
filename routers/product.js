const express2 = require('express');
const router = express2.Router();

router.get('/', function(req, res) {
    res.send('product 라우트 루트');
})

router.post('/insert', function(req, res) {
    res.send('/product/insert 라우트');
})

router.put('/update', function() {
    res.send('/product/update 라우트');
})

router.put('/delete', function() {
    res.send('/product/delete 라우트');
})

module.exports = router;