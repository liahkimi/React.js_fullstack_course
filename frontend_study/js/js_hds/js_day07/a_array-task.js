// datas라는 Array객체를 한 개 선언한다.
// datas에 1~5까지 값을 담은 뒤
// 각 값에 + 5를 해서 출력하기
// let datas = [];

// // 값을 넣는 부분
// for (let i = 0; i < 5; i++) {
//     // datas[i] = i + 1;
//     datas.push(i + 1);
// }

// // 값을 사용하는 부분
// for (let i = 0; i < datas.length; i++) {
//     console.log(datas[i] + 5);
// }

// datas라는 Array객체를 한 개 선언한다.
// datas에 1~10까지 중 짝수만 담는다.
// datas의 모든 요소(값)를 ":"으로 연결하여 출력한다.
// let datas = [];
// datas.concatenate = function () {
//     console.log(":으로 연결");
//     return this.join(":");
// };

// for (let i = 0; i < 5; i++) {
//     datas[i] = (i + 1) * 2;
// }

// const result = datas.concatenate();
// console.log(result);

// datas라는 Array객체를 한 개 선언한다.
// datas에 1~10까지 담는다.
// 첫 번째 값을 제외한 나머지 요소(값)를 추출한다.
// 추출한 Array객체에서 홀수만 출력한다.
// let datas = [];

// for (let i = 0; i < 10; i++) {
//     datas[i] = i + 1;
// }

// let datasSliced = datas.slice(1);

// for (let data of datasSliced) {
//     // if (data % 2 == 1) {
//     //     console.log(data);
//     // }
//     data % 2 == 1 && console.log(data);
// }

// datas라는 Array객체를 한 개 선언한다.
// datas에 1~10까지 담는다.
// datas에서 짝수만 삭제한다.
// Array.prototype.setFrom1To10 = function () {
//     for (let i = 0; i < 10; i++) {
//         this[i] = i + 1;
//     }
// };
// let datas = [];
// datas.setFrom1To10();

// for (let i in datas) {
//     console.log(i);
//     console.log(datas[i]);
//     // 인덱스가 댕겨져도 반복횟수는 같기 때문에,
//     // 정확히 짝수를 찾은 뒤 그 인덱스를 삭제한다.
//     if (datas[i] % 2 == 0) {
//         datas.splice(i, 1);
//     }
//     console.log("==");
// }

// console.log(datas);

// datas의 길이에 변화를 주면, 변화된 datas를 매번 불러온다.
// 기존 인덱스의 값이 달라질 수 있다.
// 아래와 같은 코드는 사용하지 않는 것이 좋다.
// for (let i in datas) {
//     console.log(datas);
//     if (i % 2 == 1) {
//         datas.splice(i, 1);
//     }
// }

// 트러블 슈팅
/********************************/
// i
// 0 1 2 3 4

// 처음에 생각했던 짝수의 인덱스
// 1 3 5 7 9
/********************************/

/**************************************************/
// 하나를 삭제할 때마다 인덱스가 1씩 당겨진다.
// 1 2 3 4 5 6 7 8 9 10
// 1 3 4 5 6 7 8 9 10
// 1 3 5 6 7 8 9 10
// 1 3 5 7 8 9 10
// 1 3 5 7 9 10
/**************************************************/

/**************************************************/
// i
// 0 1 2 3 4

// 규칙을 찾았을 때 짝수가 있는 인덱스
// 1 2 3 4 5
/**************************************************/

// for (let i = 0; i < 5; i++) {
//     datas.splice(i + 1, 1);
// }

// console.log(datas);

// datas라는 Array객체를 한 개 선언한다.
// datas에 1~10까지 담는다.
// 홀수만 모두 2를 빼주기
// Array.prototype.setFrom1To10 = function () {
//     for (let i = 0; i < 10; i++) {
//         this[i] = i + 1;
//     }
// };

// let datas = [];
// datas.setFrom1To10();

// for (let i in datas) {
//     // if (i % 2 == 0) {
//     //     datas.splice(i, 1, datas[i] - 2);
//     // }
//     i % 2 == 0 && datas.splice(i, 1, datas[i] - 2);
// }

// console.log(datas);
