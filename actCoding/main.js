var http = require('http');
var fs = require('fs');
var url = require('url');

// index.html 페이지를 로드하는 서버
var app = http.createServer(function(req, res) {
    //console.log("request :: ", req);

    var _url = req.url;
    var queryData = url.parse(_url, true).query; // ?id=HTML과 같이 ?뒤에 붙은 데이터를 쿼리데이터라 부른다
    var pathName = url.parse(_url, true).pathname; // url 객체의 정보를 조회하는 모듈을 사용하여 정보를 가져온다

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
        // home url 조회시
        if (queryData.id === undefined) {
            // 관련 ID의 파일명을 가진 파일을 읽어와서 template에 추가
            //fs.readFile(`./data/${title}`, 'utf-8', function(err, description) {
            var title = 'Welcome';
            var description = 'Hello Node.js'
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
                <ol>
                    <li><a href="/?id=HTML">HTML</a></li>
                    <li><a href="/?id=CSS">CSS</a></li>
                    <li><a href="/?id=JavaScript">JavaScript</a></li>
                </ol>
                <h2>${title}</h2>
                ${description}
                </body>
                </html>`;

            res.writeHead(200);
            res.end(template); // res.send와 같은 방식으로 사용된다
            //});
        } else {
            // 관련 ID의 파일명을 가진 파일을 읽어와서 template에 추가
            fs.readFile(`./data/${queryData.id}`, 'utf-8', function(err, description) {
                var title = queryData.id;
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
                <ol>
                    <li><a href="/?id=HTML">HTML</a></li>
                    <li><a href="/?id=CSS">CSS</a></li>
                    <li><a href="/?id=JavaScript">JavaScript</a></li>
                </ol>
                <h2>${title}</h2>
                ${description}
                </body>
                </html>`;

                res.writeHead(200);
                res.end(template); // res.send와 같은 방식으로 사용된다
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