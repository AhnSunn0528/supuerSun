const express = require('express');
const cors = require('cors'); // 특정 사이트, 포트, 라우터만 접근이 가능하도록 세팅
const app = express();

const corsOptions = {
    origin: 'http://example.com', // 허용할 도메인 설정
    optionsSucessStatus: 200
}

app.get('/products/:id', cors(corsOptions), function(req, res, next) {
    res.json({ msg: 'This is CORS-enabled only example.com' });
})

app.listen(80, function() {
    console.log('CORS-enabled web server listening on port 80');
})