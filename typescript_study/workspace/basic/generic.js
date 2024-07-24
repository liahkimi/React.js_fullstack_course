"use strict";
// 제네릭(generic)이란?
// 재사용성 높은 컴포넌트를 만들 때 사용하며, 
// 한가지 타입보다 여러 타입에서 동작하는 컴포넌트를 생성하는데 사용한다.
// 제네릭 문법을 사용하지 않을 경우
// const anyText = (text:any):any => {
//     console.log(text)
//     return text
// }
// anyText(10)
// anyText("string")
// anyText(true)
// 제네릭을 사용하는 방법
// 1) 어떤 타입을 받을 건지 먼저 정의 <T>()
// 2) params 타입을 정의 (value : T)
// 3) return 타입을 정의 () : T
function genericText(text) {
    console.log(text);
    return text;
}
const genericText2 = (text) => {
    console.log(text);
    return text;
};
// 제네릭 사용
const str = genericText("a");
str.split("");
console.log(typeof str);
const isTrue = genericText2(true);
console.log(typeof isTrue);
// 제네릭 원리
genericText2(10);
const genericText3 = (value) => {
    return value;
};
// 타입가드
// 길이를 반환하는 제네릭 함수
const genericFunc = (value) => {
    if (typeof value === "string") {
        console.log(value.length);
    }
    return value;
};
console.log(genericFunc(30));
const myFunc2 = (value) => {
    return value;
};
let myString2 = myFunc2;
myString2(true);
myString2(11);
myString2("hi");
const getProductItems = (item) => {
    return item;
};
// console.log(getProductItems("name"))
const item = {
    name: "노트북",
    price: 200000,
    stock: 10
};
// 일반적인 사용방법
const getProductItems2 = (item) => {
    return item;
};
console.log(getProductItems2(item));
