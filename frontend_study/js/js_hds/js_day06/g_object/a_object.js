// 반(클래스)
// 클래스는 추상적인 개념이다.
// 공통 요소를 반으로 묶는 이유는 딱 한 번만 선언하기 위해서이다.

// 객체
// 추상적인 개념을 구체화시킨 것이다.
// 반에 선언된 프로퍼티를 사용할 수 있다.
// 프로퍼티에 접근하기 위해서는 . 연산자를 사용한다.
// 프로퍼티에 접근할 때 []연산자를 사용할 수도 있다.
// 객체는 값으로 봐야한다!

let user = {
    name: "한동석",
    age: 20,
    address: "경기도",
    introduce: () => {
        console.log("Hi😍");
    },
    card1: "신한",
    card2: "국민",
    card3: "하나",
};

console.log(user.name);
user.introduce();
console.log(typeof user);

// 일반적으로 .를 사용해서 프로퍼티에 접근한다.
console.log(user.address);
// 만약 프로퍼티 이름에 "-"와 같은 특수문자가 들어가 있거나
// 프로퍼티 이름에 규칙성이 있어서 한 번에 가져와야 할 때에는
// []를 사용해서 프로퍼티에 접근한다.
console.log(user["address"]);

for (let i = 0; i < 3; i++) {
    console.log(user[`card${i + 1}`]);
}
