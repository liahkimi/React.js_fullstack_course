//생성자  Object();
//함수로 선언하되, 함수라 부르지 않고 생성자라고 부른다.
//생성자는 리턴값이 정해져 있기 때문에 선언시 리턴을 사용할 수 없다.(리턴값:주소값)
//따라서 함수라고 부를 수 없다.
//앞 글자를 대문자로 작성한 뒤 함수를 선언하면, 이를 생성자로 판단한다.

//생성자는 '한번만 선언'한다.
//초기화를 하고자하면, 매개변수로 초기값을 받을 수 있다.
function Card(name, user, cvc = "000") {
    //접근한 객체가 갖고 있는 주소가 this에 자동으로 담긴다.
    this.name = "";
    this.user = user;
    this.cvc = "";
    this.getHistory = getHistory = () => {
        console.log(this.name + "은행 결제 목록");
    };
}

//회원 : 카드 = 1 : N => N쪽인 card 인스턴스 객체에 user프로퍼티를 넣어줘야 함.
//그래서 N쪽인
let user = {
    name: "한동석",
    age: 20,
    address: "경기도",
    introduce: () => {
        console.log("Hi😍");
    },
};
//객체화를 할 때마다 새로운 공간이 할당되고, 객체마다 주소값은 다르다.
const shinhan = new Card("신한", user); //주소값을 변수에 넣는다.//const를 써야 다른 주소가 들어갈 수 없음.
const kookmin = new Card("국민", user, "123");

console.log(typeof shinhan); //object <-js의 동적바인딩 특징으로 Card로 나와야 할 것 같지만, 통칭 object로 뜸.
console.log(shinhan); //Card {name: '', user: {…}, cvc: '', getHistory: ƒ}

// shinhan.user = user;
// kookmin.user = user;

console.log(this); //{} <= 생성자에서는 this가 주소값이라고 했는데, 왜 {}가 뜨는가==>d_this.js로 가셈
console.log(this === global); //false
