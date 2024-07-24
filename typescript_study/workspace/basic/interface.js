"use strict";
// 인터페이스를 사용하는 이유
// 오브젝트의 선언시 프로퍼티스가 많아지고 가독성이 떨어질 수 있다.
// 가독성을 높이기 위한 인터페이스를 사용한다.
Object.defineProperty(exports, "__esModule", { value: true });
const myAnimal = {
    species: "Dog",
    canSpeak: false,
};
const myCat = {
    species: "Cat",
    canSpeak: true,
    numberOfWings: 2,
};
const myHuman = {
    species: "휴먼",
    canSpeak: false,
    name: '김세환',
    age: 17
};
console.log(myHuman);
const myMachine = {
    powerLevel: 999999,
    material: "metal",
};
let myUnionVar = {
    // 섞어서 사용할 수는 없다.
    powerLevel: 999999,
    material: "metal",
};
let myStringOrNum = 102;
function myUnionFunc(param) {
    return param;
}
let object = {
    prop1: 10,
    prop2: "들어갈게! 눈치주지마!",
    prop3: 3,
};
