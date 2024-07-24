// 생성자
// 함수로 선언하되, 함수라 부르지 않고 생성자라고 부른다.
// 생성자는 리턴값이 정해져있기 때문에 선언 시 리턴을 사용할 수 없다.
// 따라서 함수라고 부를 수 없다.
// 앞글자를 대문자로 작성한 뒤 함수를 선언하면, 이를 생성자로 판단한다.

// 초기화를 하고자 하면, 매개변수로 초기값을 받을 수 있다.
function Card(name, user, cvc = "000") {
    // 접근한 객체가 갖고 있는 주소가 this에 자동으로 담긴다.
    this.name = name;
    this.user = user;
    this.cvc = cvc;
    this.getHistory = () => {
        console.log(this.name + "은행 결제 목록");
    };
}

// 객체화를 할 때 마다 새로운 공간이 할당되고, 객체마다 주소값은 다르다.

let user = {
    name: "한동석",
    age: 20,
    address: "경기도",
    introduce: () => {
        console.log("Hi😍");
    },
};

const shinhan = new Card("신한", user);
const kookmin = new Card("국민", user, "123");

console.log(typeof shinhan);

// shinhan.user = user;
// kookmin.user = user;
