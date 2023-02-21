const { nextTick } = require('process');
//import process from 'process';
console.log('start');

setTimeout(() => {
    console.log('timeout callback');
}, 0);

// nextTick함수는 다른 콜백함수들보다 먼저 실행된다는 프로세스(작업순서)를 가지고 있다.
process.nextTick(() => {
    console.log('nextTick callback');
});
console.log('end');