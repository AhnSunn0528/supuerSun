var http = require('http');
var fs = require('fs');
var url = require('url');

var testFolder = './data';

// 템플릿 생성 [공통]
function templateHtml(title, listTemplate, description) {
    // 화면 VIEW template
    var template = `
    <!doctype html>
    <html>
    <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
    </head>
    <body>
    <h1><a href="/">WEB</a></h1>
    ${listTemplate}
    <h2>${title}</h2>
    ${description}
    </body>
    </html>`;

    return template;
}

// 파일 목록들을 조회하여 html 양식으로 정렬
function tamplateList(filelist) {
    var list = '<ol>';
    for (var i = 0; i < filelist.length; i++) {
        list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
    }
    list += '</ol>';
    return list;
}

// index.html 페이지를 로드하는 서버
var app = http.createServer(function(req, res) {
    //console.log("request :: ", req);

    var _url = req.url;
    var queryData = url.parse(_url, true).query; // ?id=HTML과 같이 ?뒤에 붙은 데이터를 쿼리데이터라 부른다
    var pathName = url.parse(_url, true).pathname; // url 객체의 정보를 조회하는 모듈을 사용하여 정보를 가져온다
    var id = queryData.id;

    //console.log('q :: ', queryData);

    // if (_url == '/') {
    //     //_url = '/index.html';
    //     title = 'welcome';
    // }

    // if (_url == '/favicon.ico') {
    //     //console.log('404 error occured!!')
    //     return res.writeHead(404);
    // }

    //console.log(__dirname + _url);
    //res.end(fs.readFileSync(__dirname + _url)); // res.send와 같은 방식으로 사용된다 -> url로 입력된 html을 로드해야될 때 사용

    if (pathName === '/') {
        // home url 조회시('/')
        if (id === undefined) {
            // 관련 ID의 파일명을 가진 파일을 읽어와서 template에 추가
            //fs.readFile(`./data/${title}`, 'utf-8', function(err, description) {
            var title = 'Welcome';
            var description = 'Hello Node.js';

            // 지정 경로에 있는 폴더의 하위 파일들을 조회 가능
            fs.readdir(testFolder, function(error, filelist) {
                //console.log(filelist);
                var listTemplate = tamplateList(filelist);
                var template = templateHtml(title, listTemplate, description);

                res.writeHead(200);
                res.end(template); // res.send와 같은 방식으로 사용된다
            });
            //});
        } else {
            // 관련 ID의 파일명을 가진 파일을 읽어와서 template에 추가
            fs.readFile(`./data/${id}`, 'utf-8', function(err, description) {
                var title = queryData.id;

                // 지정 경로에 있는 폴더의 하위 파일들을 조회 가능
                fs.readdir(testFolder, function(error, filelist) {
                    //console.log(filelist);
                    var listTemplate = tamplateList(filelist);
                    var template = templateHtml(title, listTemplate, description);

                    res.writeHead(200);
                    res.end(template); // res.send와 같은 방식으로 사용된다
                });
            });
        }
    } else {
        res.writeHead(404);
        res.end('NOT FOUND');
    }
});

app.listen(3000, () => {
    console.log('server open!!')
});