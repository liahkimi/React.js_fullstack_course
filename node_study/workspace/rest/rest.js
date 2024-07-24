import { createServer } from 'http'
import { parse } from 'url'

// REST api 구현 예시
// RESTful api는 read나 update하는데 주로 사용.
// 웹서버는 클라이언트로부터의 요청을 받으면, 필요한 경우 DB에 접근하여 데이터를 읽고 씀.
// Node.js로 HTTP 웹서버를 생성하고, 요청을 처리하는 방법인 REST api를 정의하기


// createServer 함수는 새로운 HTTP 서버를 생성
// req (요청)와 res (응답) 객체를 매개변수로 받아 처리합니다.
const server = createServer((req, res) => {
    // 경로 추출
    // req.url에서 요청된 URL을 추출하고, parse 함수를 사용하여 URL의 경로를 분석합니다. 
    // 여기서 pathname은 URL 경로를 나타냅니다.
    const path = parse(req.url, true).pathname;

    // 응답 헤더 설정:
    // 클라이언트에게 응답이 JSON 형식임을 알려줍니다. 
    // charset=utf-8은 UTF-8 인코딩을 사용함을 명시
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    
    // CORS 설정
    // Access-Control-Allow-Origin
    // 모든 도메인에서 서버에 접근할 수 있도록 허용합니다. 
    // 실무에서는 "*" 대신 특정 도메인을 설정합니다.
    res.setHeader("Access-Control-Allow-origin", "*")

    // Access-Control-Allow-Credentials: 
    // 클라이언트가 자격 증명(예: 쿠키, HTTP 인증)을 포함할 수 있도록 허용합니다.
    res.setHeader("Access-Control-Allow-Credentials", true)

    // 요청된 경로에 따라 적절한 응답 반환 처리
    if( path === '/api/user/1'){
        res.end(JSON.stringify({ // JSON형식으로 데이터 반환 예정
            number : 1,
            name : "김세환",
            address : "경기도 구리시"
        }))
    }
})

server.listen("8000", () => {
    console.log('REST Server Start!')
})