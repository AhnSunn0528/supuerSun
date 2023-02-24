var express = require('express');
var session = require('express-session');
const app = express();

app.get('/', (req, res, next) => {
    console.log(req.session);
    res.end(req.session);
});

app.post('/login', (req, res, next) => {
    const { email, pw } = req.body.param;
    // 데이터베이스 사용자 테이블에서 로그인 인증처리 코드 작성
    // 사용자가 존재하면(로그인 성공시)
    req.session.email = email;
    req.session.is_logined = true; // 로그인 여부
    req.session.save(err => {
        if (err) throw err;
        res.redirect('/home');
    })
})

app.post('/logout', (req, res, next) => {
    req.session.destroy(); // 세션 삭제
    res.redirect('/login');
})