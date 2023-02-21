const OS = require('os');
//import OS from 'os';
console.log(OS.arch()); // CPU 아키텍쳐
console.log(OS.cpus()); // 컴퓨터의 CPU 코어정보를 배열로 리턴
console.log(OS.hostname());
console.log(OS.networkInterfaces()); // 네크워크 정보
console.log(OS.type()); // 운영체제 타입
console.log(OS.platform()); // darwin
console.log(OS.release()); // 운영체제 버전
console.log(OS.homedir()); // 홈 디렉토리 경로
console.log(OS.tmpdir()); // 임시 파일 저장 경로
console.log(OS.totalmem()); // 전체 메모리 크기
console.log(OS.freemem()); // 사용 가능한 메모리 크기