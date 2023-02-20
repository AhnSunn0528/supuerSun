console.log('hello world');
console.log('hello %s', 'world');

const world = 'world';
console.log(`hellpo ${world}`);
console.error(new Error('에러 메세지 출력'));

const arr = [
    { name: 'John Doe', email: 'john@email.com' },
    { name: 'Jeremy Go', email: 'jeremy@email.com' }
]
console.table(arr);

const obj = {
    student: {
        grade1: { class1: {}, class: {} },
        grade2: { class1: {}, class: {} },
        teachers: ['John Doe', 'Jeremy Go']
    }
}
console.dir(obj);

console.time('time for for-loop');
for (let i; i < 999999; i++) {
    console.timeEnd('time for for-loop');
}