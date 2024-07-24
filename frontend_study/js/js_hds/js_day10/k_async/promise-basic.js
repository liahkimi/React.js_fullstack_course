// 프로그램
// 실행이 안된 상태

// 프로세스
// 실행된 프로그램

// 쓰레드
// 프로세스 처리 경로

// 단일 쓰레드
// 처리 경로가 한 개

// 멀티 쓰레드
// 처리 경로가 여러 개

// 동기(Synchronized)
// 모든 쓰레드가 하나씩 처리하도록 한다.

// 비동기(Asynchronized)
// 모든 쓰레드가 순서가 없는 것처럼 동작한다.

// promise 객체를 만드는 법
const promise = new Promise((resolve) => {
    let result = 1 + 1;
    resolve(result);
});

// 동기 a
let data = 0;

// ★ 만들어진 promise 객체를 사용하는 법
// 비동기 a
promise.then((result) => {
    data = result;
    console.log(`result: ${result}`);
});

// 동기 b
console.log(`data: ${data}`);

// promise.then(console.log);

// 동기 코드의 실행 흐름과 비동기 코드의 실행 흐름이 나뉘어있다.
// promise객체를 사용하는 이유는 JS로 통신 및 DB접근이 비동기로 되어있기 때문이다.
// 이 때 비동기 코드의 결과가 promise객체에 담기기 때문에
// 우리는 promise를 공부해야 한다.
