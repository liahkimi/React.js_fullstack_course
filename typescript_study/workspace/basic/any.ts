// any type
// 어떤 타입이 들어와도 상관없을 때 사용한다.

let anyType: any = "Some String Value";
anyType = 10;
anyType = true;
anyType = () => {};
anyType = {
    a: "a",
    b: 10,
    c: []
};

let myAnyType:any = 3;
let myString:string = myAnyType as string;
// console.log(typeof myString)

// any 타입이지만, 타입을 number로 변환했기 때문에 타입검사에서 오류
// return myAnyTyp as number;
// as 문법은 지양하자!
const myAnyTypeFunction = (myAnyType: any):string => {
    return myAnyType as string;
}

console.log(typeof myAnyTypeFunction(myAnyType))











