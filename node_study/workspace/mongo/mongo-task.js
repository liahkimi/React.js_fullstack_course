import { MongoClient } from "mongodb"

// 접근하기 위한 mongo url 주소
const connection_url = `mongodb+srv://app:1234@app.yk55qkd.mongodb.net/`

// connection
const client = await MongoClient.connect(connection_url)

// Database 가져오기, 없으면 생성 후 가져온다.
const db = client.db("product");

// 컬렉션(테이블) 생성
await db.createCollection("product");

// 컬렉션 가져오기
const collection = db.collection("product");


//================================================================================
// 상품 3개 추가
// 상품명(name), 가격(price), 재고(stock), 제조국가(made_in), 거래처(mou), 등록인(user)
// insertMany

// 상품 1개 정보 예시
// {
//     name : "사과",
//     price : 3000,
//     stock : 30,
//     made_in : ["korea", "America"],
//     mou : [
//         { name : "이마트", address : "역삼동" },
//         { name : "하이마트", address : "봉천동" },
//         { name : "롯데마트", address : "목동" },
//     ],
//     user : { name : "홍길동", position : "대리" },
// }

// 데이터 추가
// await collection.insertMany([
//     {
//         name : "사과",
//         price : 3000,
//         stock : 30,
//         made_in : ["korea", "America"],
//         mou : [
//             { name : "이마트", address : "역삼동" },
//             { name : "하이마트", address : "봉천동" },
//             { name : "롯데마트", address : "목동" },
//         ],
//         user : { name : "홍길동", position : "대리" },
//     },
//     {
//         name : "자두",
//         price : 10000,
//         stock : 800,
//         made_in : ["America", "China"],
//         mou : [
//             { name : "롯데마트", address : "방배동" },
//             { name : "신세계 백화점", address : "반포동" },
//             { name : "또와 슈퍼", address : "대성리" },
//         ],
//         user : { name : "이순신", position : "과장" },
//     },
//     {
//         name : "수박",
//         price : 18000,
//         stock : 223,
//         made_in : ["korea", "Australia"],
//         mou : [
//             { name : "현대 백화점", address : "청담동" },
//             { name : "GS25", address : "역삼동" },
//             { name : "행복마트", address : "구로동" },
//         ],
//         user : { name : "이순신", position : "과장" },
//     },
// ])


// 전체 삭제
// await collection.deleteMany();

// 전체 조회
// const products = await collection.find({}).toArray()
// console.log(products)

// "사과" 정보 조회
// const products = await collection.find({name : {$eq : "사과"}}).toArray()
// const products2 = await collection.find({name : "사과"}).toArray()
// console.log(products)

// 재고가 100개 이상인 상품 조회
// const products = await collection.find({ stock : { $not : { $lte : 100} }}).toArray()
// console.log(products)

// 제조 국가가 Korea인 상품 조회
// const products = await collection.find({ made_in : "korea"}).toArray()
// console.log(products)

// 등록자 중 "대리" 직급의 상품 조회
// const products = await collection.find({ "user.position" : "대리"}).toArray()
// console.log(products)

// 거래처 주소에 역삼동이 있는 상품 조회(⭐$elemMatch)
// const products = await collection.find({ mou : { $elemMatch : { address : "역삼동"} }}).toArray()
// console.log(products)

// 상품 중, 거래처 이름에 백화점이 포함된 상품 조회 (⭐$regex : '포함하다'라는 뜻)
// const products = await collection.find({ mou : { $elemMatch : { name : { $regex : "백화점"} }}}).toArray()
// console.log(products)

// 상품 중, 등록자의 직급이 대리가 아닌 상품 모두 삭제하고 확인
// await collection.deleteMany({ "user.position" : { $ne : "대리" } });
// const products = await collection.find().toArray()
// console.log(products)

// "사과" 1개 조회
// const product = await collection.findOne({name : "사과"});
// console.log(product)

// "사과" 재고 1개 추가
// const product = await collection.findOne({name : "사과"});
// await collection.updateOne(
//     { _id : product._id }, //_id: ObjectId('665a890e5644af6976467205') <- mongoDB 자동 생성
//     { $set : { stock : product.stock + 1} } // ⭐$set 연산자는 업데이트 작업에서 사용되며, 문서 내의 필드 값을 업데이트함
// )
// 업데이트된 "사과" 재고 조회
// const updated_apple = await collection.findOne({name : "사과"});
// console.log(updated_apple)

// "사과"만 삭제
// const product = await collection.findOne({name : "사과"});
// await collection.deleteOne({ _id : product._id }); // 삭제는 id로 할 것.
// const products = await collection.find().toArray()
// console.log(products)



