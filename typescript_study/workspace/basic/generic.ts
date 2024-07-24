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
function genericText<T>(text: T):T{
    console.log(text)
    return text;
}

const genericText2 = <T>(text:T): T => {
    console.log(text)
    return text;
}

// 제네릭 사용
const str = genericText<string>("a");
str.split("");
console.log(typeof str)

const isTrue = genericText2<boolean>(true);
console.log(typeof isTrue)

// 제네릭 원리
genericText2<number>(10);

const genericText3 = <T>(value:number): number => {
    return value;
}

// 타입가드
// 길이를 반환하는 제네릭 함수
const genericFunc = <T>(value:T):T => {
    if(typeof value === "string"){
        console.log(value.length)
    }
    return value;
}
console.log(genericFunc<number>(30))


// 인터페이스 + 제네릭
interface genericLogTextFn {
    <T>(text: T):T;
}

const myFunc2 = <T>(value: T):T => {
    return value;
}

let myString2:genericLogTextFn = myFunc2;

myString2<boolean>(true)
myString2<number>(11)
myString2<string>("hi")


// 제네릭으로 들어온 키 값 타입만 사용하도록 제한하고 싶을 때
interface ProductItems {
    name : string;
    price : number;
    stock : number;
}

const getProductItems = <T extends keyof ProductItems>(item: T) :T => {
    return item;
}

// console.log(getProductItems("name"))

const item:ProductItems = {
    name : "노트북",
    price : 200000,
    stock : 10
}

// 일반적인 사용방법
const getProductItems2 = <T extends ProductItems>(item: T) :T => {
    return item;
}
console.log(getProductItems2(item))












