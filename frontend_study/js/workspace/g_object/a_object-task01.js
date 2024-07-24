// 회원
// 회원번호, 아이디, 주소1, 주소2, 주소3
let user = {
    number: 2,
    id: "hds1234",
    address1: "서울시",
    address2: "강남구",
    address3: "역삼동",
};

// 상품
// 상품번호, 상품명, 상품 가격, 상품을 구매한 회원
let product = {
    number: 1,
    "product-name": "가디건",
    price: 78000,
    user: user,
    // 메소드와 함수의 차이
    // 메소드는 영역 안에서 선언된다.
    // 함수는 영역 안에 있지 않고 밖에 선언된다.
    // printInfo: () => {
    //     console.log(product.number, product.price, product["product-name"]);
    // },
    // printAddress: () => {
    //     for (let i = 0; i < 3; i++) {
    //         console.log(product.user[`address${i + 1}`]);
    //     }
    // },
};

// 수정: 기존에 있는 key값에 새로운 값을 넣는다.
product["product-name"] = "패딩";

// 추가: 기존에 없는 key값에 값을 넣는다.
product.printInfo = () => {
    console.log(product.number, product.price, product["product-name"]);
};

// 상품 전체 정보를 출력하고, 회원의 정보는 주소만 출력한다.
product.printAddress = () => {
    for (let i = 0; i < 3; i++) {
        console.log(product.user[`address${i + 1}`]);
    }
};

product.printInfo();
product.printAddress();
