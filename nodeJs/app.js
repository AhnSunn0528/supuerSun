const express = require('express');
const customerRoute = require('../routers/customer.js');
const productRoute = require('../routers/product.js');
const app = express();

app.use(express.json({
    limit: '50mb' // 최대 50 mega
}));

app.listen(3000, () => {
    console.log('Server started. port 3000.');
});

// app.use('/', function(req, res) {
//     res.send('TEST AREA');
// });

app.use('/customer', customerRoute);
app.use('/product', productRoute);

app.get('/error', function(req, res) {
    throw new Error('에러 발생');
})

app.use(function(err, req, res, next) {
    res.status(500).json({ statusCode: res.statusCode }); // 코드 500, 에러 코드 전달
})