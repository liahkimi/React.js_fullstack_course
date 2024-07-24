// Array: 저장공간의 나열
// let datas = [10, 20, 15, 30, 25];
// console.log(datas[0]);
// console.log(datas[1]);
// console.log(datas[2]);

// for (let i = 0; i < datas.length; i++) {
//     console.log(datas[i]);
// }

// let datas = [10, 20, 15, 30, 25];

// // 인덱스가 필요할 때
// for (let i in datas) {
//     console.log(i);
// }

// // 값이 필요할 때
// for (let data of datas) {
//     console.log(data);
// }

// push(추가할 값): 가장 마지막에 값 추가
// let datas = [10, 20, 15, 30, 25];

// datas.push(100);
// console.log(datas);

// join(): 전달한 값으로 Array객체의 각 요소를 구분한 뒤 문자열로 리턴한다.
// let datas = [10, 20, 15, 30, 25];
// console.log(datas.join(","));

// slice(begin, end): 원하는 부분을 추출하기 위해서 시작 인덱스와 마지막 인덱스를 전달한다.
// slice(begin): 시작 인덱스부터 마지막까지 추출한다.
// let datas = [10, 20, 15, 30, 25];
// datas = datas.slice(0, 3);
// console.log(datas);

// 인덱스가 음수라면, 뒤에서부터 순서대로 앞으로 온다.
// 마지막 방 인덱스는 -1, 마지막에서 두 번째 방 인덱스는 -2
// [3, 5, 7, 9]
// -4 -3 -2 -1 : 음수 인덱스
// datas = datas.slice(1, -1);
// console.log(datas);

// datas = datas.slice(1);
// console.log(datas);

// splice(index, count): 삭제
// splice(index, count, ...args): 교체
// let datas = [10, 20, 15, 30, 25];

// 삭제된 값이 Array객체로 리턴
// console.log(datas.splice(1, 1));
// 원본이 바로 적용된다.
// console.log(datas);

// 삭제 후 삽입: 교체 및 수정으로 표현
// datas.splice(2, 1, 40);
// console.log(datas);

// indexOf(value): value를 해당 Array객체에서 찾은 뒤 인덱스 번호를 리턴한다.
//                 못찾으면 -1을 리턴한다.

// let datas = [10, 20, 15, 30, 25];
// console.log(datas.indexOf(20));
// console.log(datas.indexOf(156));

// forEach(callback): 전달한 callback함수의 매개변수에 값, 인덱스, 원본객체를 전달한다.
// let datas = [10, 20, 15, 30, 25];

// 순서 상 매개변수를 작성해야 하지만, 사용하지 않는다면, _(언더바)를 작성한다.
// datas.forEach((_, i, datas) => {
//     datas[i] = i + 1;
// });

// console.log(datas);

// datas.forEach((data) => {
//     console.log(data);
// });

// map(callback): 기존 값을 callback함수의 리턴값으로 변경시킨다. 작업이 완료된 Array객체를 리턴한다.
// let datas = [10, 20, 15, 30, 25];

// console.log(
//     datas.map(() => {
//         return 3;
//     })
// );

// console.log(datas);

// const result = datas.map((data) => data + 3);
// console.log(result);

// filter(callback): 전달한 callback함수의 리턴값이 true일 때에만 해당 값을 추출한다.
// let datas = [10, 20, 15, 30, 25];

// const result = datas.filter((data) => data % 2 == 1);
// console.log(result);

// reduce(callback)
// callback함수의 첫 번째 매개변수에 callback의 리턴값이 들어간다.

// reduce(callback)
// 전달한 callback함수의 매개변수에 4개를 전달할 수 있다.
// 첫 번째 매개변수: 초기값 설정, Array객체의 첫 번째 값(요소)으로 설정
// 두 번째 매개변수: Array 객체의 각 값(요소)
// 세 번째 매개변수: 두 번째 매개변수에 들어온 값의 인덱스
// 네 번째 매개변수: 원본 Array 객체

// reduce(callback, initValue)
// 만약 initValue를 작성한다면, 첫 번째 매개변수에 initValue가 들어간다.

// let datas = [10, 20, 15, 30, 25];

// const result = datas.reduce((variable, data, i) => {
//     return 3;
// });
// console.log(result);

// const result = datas.reduce((variable, data, i) => {
//     console.log(variable, data, i);
//     return variable + data;
// });
// console.log(result);

// let datas = [10, 20, 15, 30, 25];

// const result = datas.reduce((variable, data, i) => {
//     variable.push(i + 1);
//     return variable;
// }, []);

// const result = datas.reduce((variable, _, i) => {
//     variable[i] = i + 1;
//     return variable;
// }, []);

// console.log(result);

// let datas = ["안", "녕", "하", "세", "요"];
// const result = datas.reduce((variable, data) => {
//     return data + variable;
// });

// console.log(result);

// let datas = [1, 2, 3, 4, 5];
// const result = datas.reduce((variable, data, i) => {
//     variable[`data${i + 1}`] = `${i}.한동석`;
//     return variable;
// }, {});

// console.log(result);
