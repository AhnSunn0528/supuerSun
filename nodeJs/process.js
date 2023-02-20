import process from 'process'; // eventEmitter의 인스턴스로 다음과 같은 이벤트가 발생할 때마다 리스너를 등록할 수 있습니다.

process.on('beforeExit', (code) => {
    console.log('2. 이벤트 루프에 등록된 작업이 모두 종료된 후 노드 프로세스를 종료하기 직전: ', code);
});

process.on('exit', (code) => {
    console.log('3. 노드 프로세스가 종료될때: ', code);
});

console.log('1. 콘솔에 출력되는 첫 메시지');