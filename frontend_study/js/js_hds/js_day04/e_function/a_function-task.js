// 1~10까지 출력하는 함수
// function printFrom1To10() {
//     for (let i = 0; i < 10; i++) {
//         console.log(i + 1);
//     }
// }

// printFrom1To10();

// "홍길동"을 n번 출력하는 함수
// function printHong(count) {
//     let name = "홍길동";
//     for (let i = 0; i < count; i++) {
//         console.log(name);
//     }
// }

// printHong(10);

// 이름을 n번 출력하는 함수
// function printName(name, count) {
//     for (let i = 0; i < count; i++) {
//         console.log(name);
//     }
// }

// printName("한동석", 5);

// 홀수를 짝수로 짝수를 홀수로 변환해주는 함수
function change(number) {
    return ++number;
}

const result = change(11);
const message = result % 2 == 0 ? "짝수" : "홀수";

console.log(message);
