// 1. partial
// 인터페이스에서 타입들 optional로 지정하는 속성

interface Address {
    email : string;
    address : string;
}

type MyEmail = Partial<Address>;

const me:MyEmail = {
    email: "maruanna1994@gmail.com",
    address : "경기도 구리시"
};

interface Product {
    id : number;
    name : string;
    price : number;
    brand : string;
    stock : number;
}
// interface Product {
//     id ?: number;
//     name ?: string;
//     price ?: number;
//     brand ?: string;
//     stock ?: number;
// }



//2.Omit
// 특정 속성만 제거한 타입을 정의하고 싶을 때

interface Product {
    id : number;
    name : string;
    price : number;
    brand : string;
    sotck : number;
}

type ShoppingItem = Omit<Product, "stock">;
const myNoteBook:ShoppingItem = {
    id : 1,
    name : "노트북",
    price : 10000000,
    brand : "apple"
}

const myProduct: Omit<Product, "stock"| "brand"> = {
    id : 1,
    name : "노트북",
    price : 10000000,
    // brand : "apple"
}

// Pick
// 해당 속성 타입만 가지고 와서, 새로운 타입을 만들고 싶을 때
interface Product2 {
    id : number;
    name : string;
    price : number;
    brand : string;
    sotck : number;
}

type MyProduct = Pick<Product2, 'id' | 'brand'>
type MyProduct2 = Pick<Product2, 'price' | 'stock'>;

