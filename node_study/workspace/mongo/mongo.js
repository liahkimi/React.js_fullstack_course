// powershell 
// > cd mongo
// > node mongo.js -> 커서만 깜빡거리는 거 정상. 몽고디비 사이트에서 확인. 
// node는 변경 사항 있을 때마다 껐다 켜줘야 함.
// 


import { MongoClient } from "mongodb"

// 접근하기 위한 mongo url 주소
const connection_url = `mongodb+srv://app:1234@app.yk55qkd.mongodb.net/`

// connection
const client = await MongoClient.connect(connection_url)

// Database 가져오기, 없으면 이름 넣고 생성 후 가져온다.
const db = client.db("member");

// 컬렉션(테이블) 생성 (중복 컬렉션 생성하지 않음)
await db.createCollection("member");

// 컬렉션 가져오기
const collection = db.collection("member");

// 데이터 추가 CRUD
// 단일 데이터 추가 .insertOne({})
// await collection.insertOne({name : "김세환"})

// 다중 데이터 추가 .insertMany([])
// await collection.insertMany([
//     { name : "kim" },
//     { name : "rora" },
//     { name : "lindy" }, 
// ])


// Read, 데이터 조회

// 총 멤버수 조회.countDocuments()
// const count = await collection.countDocuments();
// console.log(count)

// 모든 멤버의 데이터 조회 .find().toArray()
// const members = await collection.find().toArray()
// console.log(members)


// $eq : 일치하는 값 모두 조회.
// const members = await collection.find({name : { $eq : "rora"}}).toArray()
// console.log(members)

// $ne : 일치하지 않는 값 모두 조회
// const members = await collection.find({ name : { $ne : "kim" } }).toArray()
// console.log(members)

// $in : 여러 값 중 하나와 일치하는 값 조회
// const members = await collection.find({ name : { $in: ['rora', '김세환'] }}).toArray()
// console.log(members)

// $nin : 여러 값과 일치하지 않는 값 조회
// const members = await collection.find({ name : { $nin : ['lindy', 'rora']}}).toArray()
// console.log(members)

// $not : false를 true, true를 false바꿔서 조회
// const members = await collection
//     .find({name : { $not : { $eq : "rora" } }}).toArray()
// rora랑 name이 같지 않은 사람들 모두 조회
// 이름이 rora가 아닌 사람들 조회
// console.log(members)


// Delete 삭제
// 내용 전체 삭제 .deleteMany()
// await collection.deleteMany();

// 데이터 추가 하기 실습!
// name : kim, age : 20
// name : rora, age : 25
// name : lindy, age : 30

// await collection.insertMany([
//     { name : "kim", age : 20 },
//     { name : "rora", age : 25 },
//     { name : "lindy", age : 30 },
// ])


// $gt : 지정한 값보다 큰 값을 조회 (greater >)
// const members = await collection.find({"age" : { $gt : 25 }}).toArray()
// console.log(members)

// $gte : 지정한 값보다 크거나 같은 값을 조회 (greater or equal >=)
// const members = await collection.find({"age" : { $gte : 25 }}).toArray()
// console.log(members)

// $lt : 지정한 값보다 작은 값을 조회 (little <)
// const members = await collection.find({"age" : { $lt : 25 }}).toArray()
// console.log(members)

// $lte : 지정한 값보다 작거나 같은 값을 조회 (little or equal <=)
// const members = await collection.find({"age" : { $lte : 25 }}).toArray()
// console.log(members)

// $or : 하나라도 true면 true
// const members = await collection.find({ $or: [{ name: "rora" },{ name : "kim" }] }).toArray()
// console.log(members)

// $and : 모두 true라면 true
// const members = await collection.find({ $and : [{ name: "rora" }, { age : 25 }] }).toArray()
// console.log(members)

// $nor : 모두 false라면 true
// const members = await collection.find({ $nor : [{ name : "rora"}, { name: "kim" }] }).toArray()
// console.log(members)

// 전체 삭제
// await collection.deleteMany();

// await collection.insertMany([
//     {
//         name : "Kim",
//         age : 17,
//         address : [
//             { main: "서울", detail : "강남" },
//             { main: "경기", detail : "구리" },
//         ],
//         hobby : ["eat", "sleep"],
//         company : { name : "google", department : "개발" }
//     },
//     {
//         name : "rora",
//         age : 25,
//         address : [
//             { main: "강원", detail : "춘천" },
//             { main: "서울", detail : "용산" },
//         ],
//         hobby : ["미술", "음악"],
//         company : { name : "LG", department : "고객서비스" }
//     },
//     {
//         name : "lindy",
//         age : 30,
//         address : [
//             { main: "경북", detail : "대구" },
//             { main: "전북", detail : "전주" },
//         ],
//         hobby : ["게임", "술"],
//         company : { name : "naver", department : "클라우드" }
//     },
// ])


// value에 여러 정보(객체)가 있을 때  
// => company : { name : "naver", department : "클라우드" }
// 문자열로 감싼뒤, 속성 찾듯이 .온점을 붙여 찾으면 된다.
// const members = await collection.find({"company.name" : "google"}).toArray()
// console.log(members);


//Embedded Data list: value에 여러 정보(객체)가 list형태로 있을 때
//  =>        address : [
//             { main: "경북", detail : "대구" },
//             { main: "전북", detail : "전주" },
//         ],
// $elemMatch
// const members = await collection.find({address : {$elemMatch : {main : "서울"}}}).toArray()
// console.log(members);


// 전체 삭제
// await collection.deleteMany()


// 새로운 데이터  추가
// await collection.insertMany([
//     {name : "kim", age: 20},
//     {name : "rora", age: 25},
//     {name : "lindy", age: 45},

// ])

// 단일 조회 .findOne({})
// const member = await collection.findOne({ name : "kim" });
// console.log(member)

// 데이터 수정하는 방법
// $set
// _id는 mongoDB에서 지정한 id key값
// const member = await collection.findOne({ name : "kim" });
// await collection.updateOne({ _id : member._id }, { $set : { name : "세환"} })
// const updated_member = await collection.findOne({ name : "세환" })
// console.log(updated_member) // { _id: new ObjectId('6662645ff854fbc653311334'), name: '세환', age: 20 }


// 삭제 후 삭제 확인하기
// await collection.deleteOne({name:"가은"});
// const members = await collection.find().toArray()
// console.log(members)






