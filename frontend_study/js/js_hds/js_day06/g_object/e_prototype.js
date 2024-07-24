// 프로토타입
// 프로토타입의 프로퍼티에 선언하면, 객체화와 상관없이 딱 한 번만 만들어진다.
// 모든 객체가 공유하는 값이 필요하다면 프로토타입의 프로퍼티로 선언한다.
// 모든 객체가 공유하는 값을 한 번에 관리하고 싶다면, 프로토타입의 프로퍼티로 선언한다.

function Employee(name, income = 0) {
    this.name = name;
    this.income = income;
}

Employee.prototype.totalIncome = 0;

han = new Employee("한동석", 100);
hong = new Employee("홍길동", 1000);

// 객체로 프로토타입의 프로퍼티를 수정하면, 객체의 프로퍼티에 추가된다.
// 객체로 프로토타입의 프로퍼티를 수정할 수 없다. 단, 사용은 가능하다.
// han.totalIncome = 100; // 객체의 프로퍼티에 추가
// console.log(han.totalIncome); // 객체의 프로퍼티에 접근

// 객체에 프로퍼티가 없으면, 프로토타입의 프로퍼티에서 찾는다.
// console.log(hong.totalIncome); // 프로토타입의 프로퍼티에 접근

// 프로토타입에 프로퍼티를 선언하는 이유는 모든 객체가 공유하기 위함이다.
// Employee.prototype.totalIncome += han.income;
// console.log(hong.totalIncome);

// Employee.prototype.totalIncome += hong.income;
// console.log(han.totalIncome);

// 공통 요소를 쉽고 편하게 관리하고자 프로토타입의 프로퍼티에 선언한다.
Employee.prototype.printInfo = function () {
    console.log(`${this.name}\n${this.income}만원`);
};
han.printInfo();
hong.printInfo();

// 잘못된 사용 예
// Employee.prototype.printInfo();
