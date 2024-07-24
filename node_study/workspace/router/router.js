// 라우터란?
// 라우터는 클라이언트의 요청 경로(path)를 보고 이 요청을 처리할 수 있는 곳으로 기능을 전달해주는 역할을 한다. 
// 애플리케이션 엔드 포인트 (URI)의 정의, 그리고 URI가 클라이언트 요청에 응답하는 방식을 의미한다. 
// 예를 들어, 클라이언트가 /users 경로로 요청을 보낸다면 이에 대한 응답 처리를 하는 함수를 별도로
// 분리해서 만든 다음 get()메소드를 호출하여 라우터로 등록할 수 있다.

import { createServer } from "http"
import { parse } from "url";  // parse모듈을 url에서 가져오기

const server = createServer((req, res) => {

    // true : 쿼리스트링(url 중에서 ?(물음표) 뒷 부분)을 객체 형식으로 가져온다.
    // false : 쿼리스트링을 문자열 형식으로 가져온다.

     // URL에서 URI(pathname)을 분리(pathname=uri) //parse(req.url, true)는 객체
    const path = parse(req.url, true).pathname;
    res.setHeader("Content-Type", "text/html; charset=utf-8")
    res.statusCode = 200; // 정상코드

    // uri path조건문
    if(path === "/new"){ // new 페이지
        res.end("<h1 style='text-align: center'>🔅신상품🔅 소개</h1>");
    } else if (path === "/hot"){ // hot 페이지
        res.end("<h1 style='text-align: center'>❤핫상품❤ 소개</h1>");
    } else { // page not fount (사용자가 잘못 입력한 것)
        res.statusCode = 404;
        res.end(
            "<h1 style='text-align: center'>페이지를 찾을 수 없습니다.😥</h1>"
        )
    } //만약, 로그인라우터에서 사용자정보 데이터를 DB에서 갖고 오고 싶다면 여기서 res로 가져오면 됨
})
// 서버실행 : 8000번 포트에서 사용자가 응답했을 때, request와 response 보내줄 준비 완료
server.listen(8000, () => console.log('Router Server Start!!'))