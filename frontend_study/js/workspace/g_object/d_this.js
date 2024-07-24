//this - this는 위치에 따라 의미가 다 다름
//함수 내부에서 this는 global 가리킴
//함수 외부(로컬 외부)에서 this는 module의 exports를 가리킴

//지역(로컬)안에서 this를 쓰면 this = global*****
//new를 붙이면 this는 생성한 객체를 가리킴******
function User(name) {
    //생성자 안에서 this의 역할은 접근한 객체를 의미
    this.name = name;
}

function thisTest() {
    //사용한 영역의 상위 객체를 가리킨다.(로컬을 벗어난 global임)
    //this를 global로 쓰고 싶으면 무.조.건 함수 내부에서 쓸 것!!!!!!!!!!
    console.log(this);
    console.log(this === global); //this = global
}
thisTest(); //global

//사용한 영역의 상위 객체를 가리킨다.(module의 exports)
console.log(this);
console.log(this === global); //{}
console.log(this === module.exports); //{}

this.id = "test"; //this <= module의 exports
console.log(this);

//자바스크립트는 파일 하나를 부품(모듈)으로 침.
//함수의 목적 = 모듈화 (코드를 분리해서 부품처럼 쪼갬)
//자바스크립트 파일 하나가 = 함수 하나 = 모듈이라는 함수(매개변수 : exports, module, require...)//exports = this = {}
// function module(exports, module, require) {
//     console.log(this); //this = 전체 파일 하나를 의미
// }
//모듈의 this는 global보다 더 확장된 범위
//global의 this는 따로 있음

/////////////////////////////////////////////////////////////////////////
//일반함수와 화살표함수의 차이
//this를 global로 사용하고 싶으면 일반함수를 사용하라!!

//일반함수는 this를 사용하면, global객체를 의미한다.
function thisTest() {
    console.log(this);
    console.log(this === global);
}
thisTest(); //{id: 'test'}  global

//화살표 함수는 this를 사용하면, global로 가지 못하고 로컬의 exports를 가리킨다.
//화살표 함수에서 this를 쓰지말자!
const arrowTest = () => {
    console.log(this);
    console.log(this === global);
};

arrowTest(); //{id: 'test'} false

//.js파일 하나가 하나의 함수이다.
//사용한 영역의 상위 객체를 가리킨다.
console.log(this); //{id: 'test'}
console.log(this === global); //false
console.log(this === module.exports); //true
