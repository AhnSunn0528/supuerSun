const multer = require('multer');
const path = require('path');
const express = require('express');
const app = express();

app.use(express.json({
    limit: '50mb'
}))

app.listen(3000, () => {
    console.log('start');
})

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, 'uploads/'); // cb함수를 통해 전송된 파일 저장 디렉터리 설정
    },
    filename: function(req, file, callback) {
        callback(null, new Date().valueOf() + path.extname(file.originalname)); // 시스템 시간으로 파일이름 설정
    }
});

const upload = multer({ storage: storage }); // multer 객체 생성
app.post('/profile', upload.single('avatar'), function(req, res, next) {
    console.log(req.file); // 업로드되는 파일의 정보
    console.log(req.body); // 일반적인 폼 데이터
})

app.post('/photos/upload', upload.array('photos', 12), function(req, res, next) {
    console.log(req.files); // photos 이름의 멀티 파일
})