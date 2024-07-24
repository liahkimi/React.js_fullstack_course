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
