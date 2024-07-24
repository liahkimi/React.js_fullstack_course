//요청 경로 : URL
//URL : 경로 //https://www.naver.com:8000/news/new/1
//URI : URL에서 IP와 포트번호를 제외한 나머지  /news/new/1 (사용자가 원하는 것)

console.log(fetch("https://jsonplaceholder.typicode.com/posts"));
//Promise {[[PromiseState]]: 'pending', [[PromiseResult]]: undefined, Symbol(async_id_symbol): 34, Symbol(trigger_async_id_symbol): 10}
//통신의 결과는 resolve에 담겨있는 것
//pending중

// fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) => {
//     response.json().then((post) => {
//         console.log(post.title); //sunt aut facere repellat provident occaecati excepturi optio reprehenderit
//     });
// });
//{userId: 1, id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit
//suscipit recusandae consequun…m rerum est autem sunt rem eveniet architecto'}

// then(() => {
//     return 10;
// }); //promise객체

//이렇게 간단히 쓰자
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((post) => {
        console.log(post);
    });
//{userId: 1, id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit
//suscipit recusandae consequun…m rerum est autem sunt rem eveniet architecto'}

// const user = {
//     id: 3,
//     name: "한동석",
// };
// console.log(JSON.stringify(user)); //{"id":3,"name":"한동석"} <=key값까지 모두 ""면 문자열이고 JSON임
//stringify = 문자열화
//js객체를 문자열화 한것

// const json_data = JSON.stringify(user); //object -> json
// const object = JSON.parse(json_data); //json(문자열)=> object
// console.log(object.name); //한동석
