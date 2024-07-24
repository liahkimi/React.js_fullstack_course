// const user = {
//     id: 1,
//     name: "han",
// };

// const numbers = [1, 3, 5, 7];

// (구조 분해)
// const { id, name } = user;
// const [number1, number2, number3, number4] = numbers;

// console.log(id, name);
// console.log(number1, number3);

// function printIntro({ id, name }) {
//     console.log(id, name);
// }

// printIntro(user);

// 아래의 코드에서 rest는 id를 제외한 나머지 정보들이 들어간다.
// 그래서 ...rest는 rest문법이다.
// function test({ id, ...rest }) {
//     console.log(rest);
// }

// let user = {
//     id: 1,
//     name: "han",
//     age: 10,
// };

// test(user);

// let user = {
//     id: 1,
//     name: "han",
// };

// user = { ...user, id: 20 };
// console.log(user);

// user = { ...user, age: 20 };
// console.log(user);

// function getTotal(...datas) {
//     console.log(datas);
// }

// getTotal(1, 2, 3, 4);
// getTotal(...[1, 2, 3, 4]);

// console.log([..."ABC"]);

// 매개변수를 몇 개 받아야할 지 모를 때
// function getString(...data) {
//     console.log(data);
// }
// getString("1", "2", "3", "4");

// getString(..."1234");

// "1234".split("");
// [..."1234"]

// Object 객체는 매개변수로 전달받을 때 비구조화 할당으로 받는 것이 편하다.
// 만약, 새로운 Object 객체가 필요하다면 rest문법을 사용해서 기존 값을 복사해서 사용한다.

// Array 객체는 매개변수로 전달받을 때
// 몇 개의 매개변수일지 알 수 없을 때 rest문법을 사용해서 받는다.
