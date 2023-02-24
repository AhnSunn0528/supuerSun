var multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, 'uploads/'); // cb함수를 통해 전송된 파일 저장 디렉터리 설정
    },
    filename: function(req, file, callback) {
        callback(null, new Date().valueOf() + path.extname(file.originalname)); // 시스템 시간으로 파일이름 설정
    }
});

const upload = multer({ storage: storage }); // multer 객체 생성