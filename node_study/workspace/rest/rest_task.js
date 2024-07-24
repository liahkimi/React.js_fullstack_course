// "api/product/3" 요청 시, 아래 JSON 데이터를 응답한다
// { "number" : 3, "name" : "노트북", "price" : 1280000, "brand" : "삼성" }
// rest_task_index.html을 만들고 REST API 서버의 응답을 HTML 화면을 통해 보여준다.

// 데이터 처리 (화면쪽 응답 받을 준비)
import { createServer } from 'http';
import { parse } from 'url';

createServer((req, res)=>{
    const path = parse(req.url, true).pathname;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader("Access-Control-Allow-origin", "*") // CORS 설정- 전체 허용
    res.setHeader("Access-Control-Allow-Credentials", true); // CORS 권한 부여
    if( path === "/api/product/3"){
        res.end(
            JSON.stringify({
                number : 3,
                name : "노트북",
                price : 1280000,
                brand : "삼성"
            })
        )
    }

}).listen("8000", () => {
    console.log("Server is On!")
})