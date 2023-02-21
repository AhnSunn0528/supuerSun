var http = require('http');
var fs = require('fs');
var url = require('url');

// index.html 페이지를 로드하는 서버
var app = http.createServer(function(req, res) {
    //console.log("request :: ", req);

    var _url = req.url;
    var queryData = url.parse(_url, true).query; // ?id=HTML과 같이 ?뒤에 붙은 데이터를 쿼리데이터라 부른다
    var title = queryData.id;
    //console.log('q :: ', queryData);

    if (_url == '/') {
        //_url = '/index.html';
        title = 'welcome';
    }

    if (_url == '/favicon.ico') {
        //console.log('404 error occured!!')
        return res.writeHead(404);
    }

    res.writeHead(200);

    //console.log(__dirname + _url);
    //res.end(fs.readFileSync(__dirname + _url)); // res.send와 같은 방식으로 사용된다 -> url로 입력된 html을 로드해야될 때 사용

    // 화면 VIEW template
    var template = `
    <!doctype html>
    <html>
    <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
    </head>
    <body>
    <h1><a href="index.html">WEB</a></h1>
    <ol>
        <li><a href="/?id=HTML">HTML</a></li>
        <li><a href="/?id=CSS">CSS</a></li>
        <li><a href="/?id=JavaScript">JavaScript</a></li>
    </ol>
    <h2>${title}</h2>
    <p><a href="https://www.w3.org/TR/html5/" target="_blank" title="html5 speicification">Hypertext Markup Language (HTML)</a> is the standard markup language for <strong>creating <u>web</u> pages</strong> and web applications.Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
    <img src="coding.jpg" width="100%">
    </p><p style="margin-top:45px;">HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets.
    </p>
    </body>
    </html>`;

    res.end(template); // res.send와 같은 방식으로 사용된다
})

app.listen(3000, () => {
    console.log('server open!!')
});