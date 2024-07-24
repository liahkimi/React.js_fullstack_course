import connect from "./connect.js"; // 우리가 만든 connect 임포트하기. node에서는 꼭 확장자명 붙여주기
import User from "./user_schema.js"; // import가 되는 대로(user_schema) 작성하면 안되고 객체명(User)으로 사용
import Post from "./post_schema.js"; // 만든 post schema

// 연결
connect();


// CRUD 기본 방법 : 추가,조회,수정,삭제

// 1개 추가 : collection.insert({})대신에  .create()
// const user_inserted = await User.create({
//     email : "codefuling@gmail.com",
//     name : "김세환",
//     age : 17,
// });
// console.log(user_inserted)


// 여러개 추가 : collection.insertMany([{},{},{}, ...])대신에 .create()
// const user_inserted = await User.create(
//     {
//         email : "hgd@gmail.com",
//         name : "홍길동",
//         age : 50,
//     },
//     {
//         email : "lss1234@gmail.com",
//         name : "이순신",
//         age : 15,
//     },
//     {
//         email : "jbg@gmail.com",
//         name : "장보고",
//         age : 38,
//     },
// );
// console.log(user_inserted)


// // 전체 조회, collection.find().toArray()대신에 .find()
// const users = await User.find()
// // [{},{},{}]
// // console.log(users)
// for(let user of users){
//     console.log(user._doc);
//     // user._doc 
//     // user테이블 문서를 뜻해서 전체 조회 가능
//     // _doc 속성은 Mongoose 문서 객체의 내부 속성으로, MongoDB에서 실제로 가져온 순수 데이터를 포함합니다. 
//     // 이 속성은 Mongoose의 다른 메서드나 속성 없이 순수한 데이터만 접근하고자 할 때 사용됩니다. 
// }


// 이메일에 codefuling이 포함된 회원 조회 .find()
// const users = await User.find({ email : { $regex : "codefuling"}});
// for(let user of users){
//     console.log(user._doc);
// }


// 1개 조회 .findOne()
// const user = await User.findOne({ name : "이순신" });
// console.log(user)


// // 1개 수정 .findOne()-> .updateOne()
// const user = await User.findOne({ email : "lss1234@gmail.com" });//수정 대상 가져오기
// const userUpdated = await User.updateOne(user, { age : 20 })//수정한 것을 변수에 저장
// console.log(userUpdated)//수정된 것을 보여주기
// // => Mongoose: user.updateOne({ _id: ObjectId("66640307b986fb8740650cce"), email: 'lss1234@gmail.com',
// //  name: '이순신', age: 15, __v: 0}, { '$set': { age: 20 } }, {}) // age가 15->20 수정완료


// // 여러개의 값 동시에 수정 .updateMany()  (💥완전 위험한 것💥-vip등급 전체 수정시 사용)
// const usersUpdated = await User.updateMany(
//     { email : { $regex : "gmail" }}, // 조건
//     { age : "10" } // 수정하려는 대상 (set)
//     // email에 gmail문자열 들어있는 사람들의 age값을 10으로 수정한다는 말
// );
// console.log(usersUpdated)


// 1개 삭제 findOne()-> deleteOne()
// const user = await User.findOne( { email : "hgd@gmail.com"} ); //삭제할 대상 조회
// const userDeleted = await User.deleteOne(user) //삭제한 대상 저장
// console.log(userDeleted) // 삭제한 것 확인



// 여러개 삭제 deleteMany()
// const userDeleted = await User.deleteMany( { email : { $regex : "gmail" }} );
// console.log(userDeleted)

//==================================================================================
// [post_schema 활용]

// 빈 user에 데이터 넣기(=회원4명 가입시키기)
// const user_insertOne = await User.create(
//         {
//             email : "codefuling@gmail.com",
//             name : "김세환",
//             age : 20,
//         }
//     );

// const user_inserted = await User.create(
//     {
//         email : "hgd@gmail.com",
//         name : "홍길동",
//         age : 50,
//     },
//     {
//         email : "lss1234@gmail.com",
//         name : "이순신",
//         age : 15,
//     },
//     {
//         email : "jbg@gmail.com",
//         name : "장보고",
//         age : 38,
//     },
// )


// 게시글 추가
// 순서가 중요
// 게시글을 작성 후, 작성완료버튼을 누른 순간 가져와야 할것 : title, content, user
// 화면으로부터 title, content 가져오지만, user는 현재 로그인 되어있는 user를 db로 부터 가져와야 함.
// ⭐원래는 로그인된 유저의 토큰 검증도 있어야 하지만 연습중이므로 생략함.

// 게시글 추가
// const user = await User.findOne({ email : "codefuling@gmail.com"})
// console.log(user)

// const postCreated = await Post.create(
//     {
//         title: "테스트 제목1",
//         content: "테스트 내용1",
//         user: user,
//     }
// )
// console.log(postCreated)

// ⭐ObjectId
// { title: '테스트 제목1', 
//     content: '테스트 내용1', 
//     user: ObjectId("66640fb9ca2e49c252f522af"), <== user의 id (회원 번호)
//     _id: ObjectId("66641bed27a76c8b5af911cb"),  <== post의 id (게시글 번호)
//     createdAt: new Date("Sat, 08 Jun 2024 08:53:01 GMT"), 
//     updatedAt: new Date("Sat, 08 Jun 2024 08:53:01 GMT"), 
//     __v: 0},

//=====================================================================

// 유저 3명, 게시글 3개
// 2번 게시판 글, 글작성 홍길동
// 3번 게시판 글, 글작성 이순신
// 4번 게시판 글, 글작성 장보고
// 게시판 글 추가 실습!
// 10분까지


// 이메일로 user 가져오기(이메일이 unique라서...)
// const user1 = await User.findOne({ email : "hgd@gmail.com"})
// const user2 = await User.findOne({ email : "lss1234@gmail.com"})
// const user3 = await User.findOne({ email : "jbg@gmail.com"})


// const postCreated = await Post.create(
//     {
//         title: "테스트 제목2",
//         content: "테스트 내용2",
//         user: user1,
//     },
//     {
//         title: "테스트 제목3",
//         content: "테스트 내용3",
//         user: user2,
//     },
//     {
//         title: "테스트 제목4",
//         content: "테스트 내용4",
//         user: user3,
//     },
// )


// 게시글 조회시, 유저정보 모두 보이게 조회하기
// const post = await Post.find().populate("user"); // *populate은 user객체 내부까지 들고온다.
// console.log(post)


// 게시글 작성자가 본인 글 삭제
// const user = await User.findOne({ name : "김세환" }); // 삭제하는 유저 당사자
// const posts = await Post.find().populate("user") // 게시글 조회

// for (let post of posts){// posts 객체 전체로 들고와 지우면 안되므로
//     // let..in은 이터러블의 key값이나 인덱스와 같이 이름을 순회해서 가져옴
//     // let..of은 이터러블의 value값을 순회해서 가져옴

//     // 유저 본인이 올린 글만 삭제 가능하다는 조건 검사
//     if(post.user.id === user.id ){ // 게시글을 올린 유저 ==== 삭제하는 유저 당사자
//         await Post.deleteOne(post)
//     }
// }


// // 개명한 회원 이름 바꾸기 .updateOne({기존데이터},{수정된데이터})
// const userUpdated = await User.updateOne(
//     { name : "장보고" },
//     { name : "홍길동" }
// ) // 💥매우 위험한 짓=> 동명이인이 있을 수 있어서 데이터 수정할때는
//    // 고유의 값인 id로 비교해서 수정할 것!
// console.log(userUpdated)


// 실습 28분까지
// 홍길동 이름을 프론트로 바꾸고 (중복된 이름중 첫번째 이름만 바뀜)
// const user1 = await User.findOne({ name : "홍길동" });
// console.log(user1)

// const userUpdated = await User.updateOne(
//     user1,
//     { name : "프론트" }
// )
// console.log(userUpdated)

// 게시판 글 전체 조회
// const posts = await Post.find().populate("user");
// for(let post of posts){
//     console.log(post.title, post.content)
//     console.log(post.user.name)
// }
// 테스트 제목2 테스트 내용2
// 프론트
// 테스트 제목3 테스트 내용3
// 이순신
// 테스트 제목4 테스트 내용4
// 홍길동




