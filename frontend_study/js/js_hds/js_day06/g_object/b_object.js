// new: heap 메모리에 할당
// Object(): 객체의 프로퍼티가 들어갈 수 있는 공간을 확보하고 그 주소를 가져와준다.
let dinner = new Object();
let user = {
    money: 10000,
};

dinner.name = "피자";
dinner.price = 30000;
// 주소를 전달받은 뒤,
dinner.pay = (user) => {
    // 직접 주소에 접근해서 값을 수정한다.
    user.money -= dinner.price;
};

// user객체가 가지고 있는 주소를 전달한다.
dinner.pay(user);
// 원본 객체인 user의 money는 이미 수정되어있다.
console.log(user.money);
