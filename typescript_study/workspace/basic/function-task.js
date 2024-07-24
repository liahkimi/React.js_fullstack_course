"use strict";
// 설명형 문법(explicit type annotation);
// 1) 성과 이름을 받아서 성이름을 붙여서 출력해주는 함수
// 2) 두 수를 받아서 사칙 연산을 배열로 리턴해주는 함수
// 3) 두 수를 받아서 A와 B를 비교하여 A가 크면 true, B가 크면 false를 리턴해주는 함수
// 4) 입력한 값을 모두 문자열로 붙여주는 함수
// ex) myFunc('가','나','다');
// 결과: 가나다
// 27분까지 실습
const getFullName = (lastName, firstName) => {
    return lastName + firstName;
};
console.log(getFullName("김", "세환"));
const getClac = (num1, num2) => {
    let sum = num1 + num2;
    let subtract = num1 - num2;
    let multiply = num1 * num2;
    let divide = num1 / num2;
    return [sum, subtract, multiply, divide];
};
console.log(getClac(2, 5));
const isMinMax = (num1, num2) => {
    if (num1 > num2) {
        return true;
    }
    else if (num1 < num2) {
        return false;
    }
    else {
        return "두 수가 같습니다";
    }
};
console.log(isMinMax(1, 2));
const getStrings = (...strings) => {
    let result = "";
    for (let string of strings) {
        result += string;
    }
    return result;
};
console.log(getStrings('안', '녕', '타', '입', '스', '크', '립', '트'));
