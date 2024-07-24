// 대카테고리
// 번호, 대카테고리명
let categoryA = {
    number: 1,
    name: "봄",
};

// 소카테고리
// 번호, 소카테고리명, 대카테고리
let categoryB = {
    number: 5,
    name: "코트",
    categoryA: categoryA,
};

console.log(categoryB.categoryA.name);
console.log(categoryB.name);
