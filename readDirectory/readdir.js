var testFolder = './data';
var fs = require('fs');

// 지정 경로에 있는 폴더의 하위 파일들을 조회 가능
fs.readdir(testFolder, function(error, filelist) {
    console.log(filelist);
})