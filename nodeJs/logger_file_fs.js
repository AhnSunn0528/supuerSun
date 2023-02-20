const fs = require('fs');
const { Console } = require('console');

const output = fs.createWriteStream('./stdOut.log'); // 파일쓰기가 가능하도록 스트림 작성
const errorOutput = fs.createWriteStream('./stdErr.log'); // 파일 쓰기가 가능하도록 스트림 생성

const logger = new Console({ stdout: output, stderr: errorOutput }); // 콘솔 객체 생성
const count = 5;

logger.log('count: %d', count); // stdout.log 파일에 5개 기록
logger.error('count: ' + count); // stdErr.log 파일에 5개 기록