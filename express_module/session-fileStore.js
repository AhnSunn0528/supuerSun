const express = require('express');
const session = require('express-session');
const fileStore = require('session-file-store')(session);
const app = express();

app.use(session({
    secret: '1234',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        secure: true,
        maxAge: 60000,
    },
    store: new fileStore()
}));

app.listen(3000, () => {
    console.log('start!!')
})