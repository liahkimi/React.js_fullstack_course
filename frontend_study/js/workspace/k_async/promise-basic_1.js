// 1. 프로그램 - 실행 안된 상태(작성된 코드(절차o))
// 2. 프로세스 - 실행 된 프로그램 (경로에따라 처리순서 o) -*작업관리자의 프로세스엔 실행 된 프로그램들만 보임
// 3. 쓰레드 - 프로세스 처리 경로 (운영체제에 보고!)
//  * 프로그램 실행 시 동작 :  os(운영체제)(하드웨어에 적절한 전기신호 전송 조절) -> 하드웨어(적절한 전기신호 받음->연산 진행 (CPU(연산), RAM(데이터 저장)))
// 4. 단일 쓰레드 - 처리 경로가 하나  -안정성 좋음 -a->b->c->a->b->c->a->b->c 빠르게 조금씩 반복하는게 동시에 움직이는것처럼 보임.반복하니까 얼마안걸리는것 먼저 실행됨.
// 5. 멀티 쓰레드 - 처리 경로가 여러개
// 6. 동기 - SYNCHRONIZED 멀티쓰레드 내부에서 단일쓰레드처럼 모든 쓰레드가 하나씩 처리하도록 함(멀티쓰레드의 단점을 보완(안정성 높음-중요한 연산 맡음))
// 7. 비동기 - ASYNCHRONIZED 모든 쓰레드가 순서가 없는 것처럼 동작한다.(순서 있지만 너무 빨라서) 너무 빠르게 동작하다가 연산 놓치는 경우 있음.
// 8. 스케줄링 : 단일쓰레드 -> 멀티쓰레드로 바꾸는 작업
// 9. 자바스크립트는 기본적으로 단일 쓰레드 환경에서 실행되지만, 자바스크립트 엔진(node.js) 자체는 멀티 쓰레딩을 지원할 수 있다.
//    *node.js = v8엔진(앞/단일쓰레드/옮기는용) + libuv 라이브러리(뒤/멀티쓰레드/연산처리용)
//    *요청 -> 단일 쓰레드 -> 연산 -> 멀티 쓰레드

// [1]Promise는 비동기 작업을 다룰 때 사용된다.
// Promise는 JS의 내장객체이며, Promise 객체는 비동기 작업을 처리하고, 완료될 때 또는 실패할 때 처리할 수 있는 작업을 나타낸다.
// 1-1. JavaScript에서 Promise 객체를 생성하는 방법!
// 프로미스는 Promise 생성자 함수를 통해 인스턴스화한다.
// Promise 생성자 함수는 비동기 작업을 수행할 콜백 함수를 인자로 전달받는데 이 콜백 함수는 resolve와 reject 함수를 인자로 전달받는다.
// *객체 : 객체는 참조 데이터 유형이므로 해당 객체의 실제 데이터가 아닌 메모리 주소(참조)만 스택에 저장되고, 실제 객체는 힙 메모리에 할당된다.

const promise = new Promise((resolve, reject) => {
    let check = true;
    if (check) {
        resolve("안녕!");
    } else {
        reject("잘가!");
    }
});

const print = async () => {
    const result = await promise;
    console.log(result);
};
// => '안녕!'출력됨

print();

// // 복잡해서 위의 방식으로 씀
// promise
//     .then((result) => {
//         //.then은 성공했을때 resolve()의 값이 나옴
//         console.log(result);
//     })
//     .catch((result) => {
//         //.catch는 오류났을 때 reject()의 값이 나옴
//         console.log(result);
//     });
// //=> 현재 check가 true이므로 resolve가 실행되어 '안녕!'이 출력된다.

// // Promise 객체를 만드는 법
// const promise = new Promise((resolve, reject) => {
//     // 인사인 resolve와 reject는 함수다
//     let result = 1 + 1;
//     // 성공
//     resolve(result); //resolve로 result를 함수 밖에서 씀
//     // 실패 - 없어도 됨
//     reject("실패");
// });
