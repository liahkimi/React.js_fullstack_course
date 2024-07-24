// "/user"에 접속하면 "홍길동님 환영합니다!" 응답!
// "/product"에 접속하면 "상품1, 상품2, 상품3은 판매중입니다!" 응답!
// 위에 경로 외에 다른 경로는 모두 "해당 페이지는 찾을 수 없습니다." 응답!
// 실습 10분

import { createServer } from 'http'
import { parse } from 'url'

const server = createServer((req, res) => {
    const path = parse(req.url, true).pathname // uri를 분리
    // res 설정
    res.setHeader("Content-Type", "text/html; charset=utf-8")
    res.statusCode = 200; // 처음에 첫 응답이 200이므로 무조건 적어줘야함.
    
    // 라우터와 함수 분리
    // patMap객체 안에 미리 정의된 path가 있다면,
    // 해당 경로에 대한 처리함수 실행
    // path가 없다면 notFound함수 실행
    if (path in patMap){ // in연산자는 반복문으로 객체 내부에 해당 속성이 있는지 찾는 연산자다.
        patMap[path](req, res);
        // patMap 객체에서 path에 대응하는 함수 실행(해당 경로에 대한 처리 실행)
    }else{
        notFound(req, res)
    }
})
// 서버 실행&확인
server.listen(8000, ()=> console.log("Router Server Start!"))

// 분리가 가능하니, 이 user 자체를 밖에서도 import해서 쓸 수 있다는 걸 생각해서 쓰면 됨!
const user = (req, res) => {
    res.end("<h1>홍길동님 환영합니다!😁</h1>")
}

const product = (req, res) => {
    res.end("<h1>상품1, 상품2, 상품3은 판매중입니다!😎</h1>")
}

const notFound = (req, res) => {
    res.end("<h1>페이지를 찾을 수 없습니다.😅</h1>")
}

// patMap 객체 선언
const patMap = {
    // path와 동일한 key를 찾아 해당 함수인 key값을 찾아 실행함
    "/user" : user,
    "/product" : product    
}