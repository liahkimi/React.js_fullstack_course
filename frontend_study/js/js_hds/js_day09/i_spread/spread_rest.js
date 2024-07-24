// // B파일
// const buttonComponent = (styles, texts) => {
//     // const buttonComponent = ({ color, border, margin }) => {
//     const { color, border, margin } = styles;
//     const { normal, hover } = texts;

//     console.log(color, border, margin);
//     console.log(normal, hover);
// };

// // A파일
// let styles = {
//     color: "red",
//     border: "1px solid black",
//     margin: "0 auto",
// };

// let texts = {
//     normal: "닭갈비",
//     hover: "[할인] 닭갈비",
// };

// // buttonComponent(styles);
// buttonComponent(styles, texts);

// B파일
// productComponent라는 함수 선언 후 상품 정보 받기
// const productComponent = ({ id, name, price, discount }) => {
//     console.log(id, name, price, discount);
// };

// const productComponent = ({ price, ...product }, discount) => {
//     return {
//         ...product,
//         price: price, // 추가
//         discount: discount, // 수정
//         sellPrice: price * (1 - discount / 100), // 추가
//     };
// };

// // A파일
// // 상품
// // 번호, 상품명, 가격, 할인율
// let product = {
//     id: 1,
//     name: "춘천 국물 닭갈비 떡볶이",
//     price: 13200,
//     discount: 15,
// };
// product = productComponent(product, 15);
// console.log(product);

// // B 파일
// // categoryComponent라는 함수 선언 후 카테고리 정보 받기
// // 이름을 다른 이름으로 변경해서 리턴하기
// const categoryComponent = (category) => {
//     return { ...category, name: "인기급상승" };
// };

// // A 파일
// // 카테고리
// // 번호, 이름
// let category = {
//     id: 3,
//     name: "Top100",
// };

// category = categoryComponent(category);

// // 변경된 카테고리 이름 출력하기
// console.log(category.name);

// B 파일
const categoryComponent = (...categories) => {
    const [category1, ...rest] = categories;
    console.log(category1);

    for (let category of rest) {
        console.log(category);
    }
};

// A 파일
globalThis.id = 0;

function Category(name) {
    this.id = ++id;
    this.name = name;
}

let categories = [
    new Category("Top100"),
    new Category("인기급상승"),
    new Category("직원추천상품"),
    new Category("신상품"),
];

categoryComponent(...categories);
