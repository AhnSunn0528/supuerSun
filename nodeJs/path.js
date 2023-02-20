import path from 'path';

const __filename = 'test.txt';
console.log(__filename); // 현재 파일의 절대 경로
console.log(path.basename(__filename)); // 경로의 마지막 부분
console.log(path.basename(__filename, '.js')); //경로의 마지막 부분에서 확장자를 제거한 이름

console.log(path.delimiter) // 환경변수 구분자 - 원도우는 세미클론(;),POSIX계열은 클론(:)

console.log(process.env.path);
process.env.PATH.split(path.delimiter);

console.log(__filename); // 현재 파일 절대 경로
console.log(path.dirname(__filename)); // 파일이 위치한 디렉토리 경로

console.log(path.extname('index.html')); // 파일의 확장자, (출력결과 - .html)

let fileName = '';
fileName = path.format({
    root: '/ignored', // dir 값이 있으므로 root는 무시됨
    dir: '/home/user/dir',
    base: 'file.txt'
});
console.log(fileName); // /home/user/dir/file.txt

fileName = path.format({
    root: '/',
    base: 'file.txt',
    ext: 'ignored'
});
console.log(fileName); // /file.txt

fileName = path.format({
    root: '/',
    name: 'file',
    ext: '.txt'
});
console.log(fileName); // /file.txt

console.log(path.join('/foo', 'bar', 'baz/asfd')); // /foo/bar/baz/asfd

console.log(path.parse('/home/user/dir/file.txt'));
// Path를 반대로 문자열로 만들어 줌
// {
//     root: '/',
//     dir: '/home/user/dir',
//     base: 'file.txt',
//     ext: '.txt',
//     name: 'file'
//   }