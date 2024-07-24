//프로토타입 - 모든 객체가 공유할때 사용하는 법
//프로토타입의 프로퍼티에 선언하면, 객체화와 상관없이 딱 한번만 만들어진다.
//모든 객체가 공유하는 값이 필요하다면, 프로토타입의 프로퍼티로 선언한다.
//모든 객체가 공유하는 값을 한번에 관리하고 싶다면, 프로토타입의 프로퍼티로 선언한다.
function Employee(name, income = 0) {
    this.name = name;
    this.income = income;
    // this.totalIncome = 0; //모든 사원들의 임금의 총합 <=객체들마다 주소값이 다르니 공유 불가
    // this.printInfo = () =>{console.log()}//메소드의 형태가 한번 선언하면 바꾸기 힘드니, 프로토타입에 넣어 사용하자.
}
//프로토타입 사용
//생성자의 이름으로 접근
//객체를 무한개 만들더라도 totalIncome은 1개다.
Employee.prototype.totalIncome = 0;

han = new Employee("한동석", 100);
hong = new Employee("홍길동", 1000);

//객체로 프로토타입의 프로퍼티를 수정하면, 객체의 프로퍼티에 추가된다.
//객체로 프로토타입의 프로퍼티를 수정할 수 없다. 단, 사용은 가능하다.
//han.totalIncome = 100; //객체로 값을 수정하면 안됨
console.log(han.totalIncome); //0

//객체에 프로퍼티가 없으면, 프로토타입의 프로퍼티에서 찾는다.
console.log(hong.totalIncome); //프로토타입의 프로퍼티에 접근

//prototype이 전역변수고, totalIncome이 지역변수인 격

//프로토타입에 선언된 프로퍼티는 모든 객체가 공유하기 위함이다.
Employee.prototype.totalIncome += han.income;
console.log(hong.totalIncome); //100

Employee.prototype.totalIncome += hong.income;
console.log(han.totalIncome); //1100

//공통 요소를 쉽고 편하게 관리하고자 프로토타입의 프로퍼티에 선언한다.
//메소드도 프로토타입에 넣자. 일반함수 써서 this를 쓸 수 있게 하자.
Employee.prototype.printInfo = function () {
    console.log(`${this.name} : ${this.income}만원`);
};
han.printInfo(); //한동석 : 100만원
hong.printInfo(); //홍길동 : 1000만원

//잘못된 사용 예
// han.printInfo() = function(){
//     console.log(`${this.name} : ${this.income}만원`);
// };
// Employee.prototype.printInfo();
