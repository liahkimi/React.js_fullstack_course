// "/user?name="홍길동""일 경우 홍길동님 환영합니다.
// "product?p1=축구공&p2=농구공&p3=배구공" 일 경우 "축구공, 농구공, 배구공은 판매중입니다!"를 응답
// 위 경로 외에 다른 경로는 모두 "페이지를 찾을 수 없습니다."

import { createServer } from 'http'
import { parse } from 'url'

const server = createServer((req, res) => {
    //URL에서 URI(pathname) 분리
    const path = parse(req.url, true).pathname;
    res.setHeader("Content-type", "text/html; charset=utf-8");
    res.statusCode = 200; // 정상적으로 응답한 상태

    // 응답 로직
    if(path in pathMap){
        pathMap[path](req, res)
    }else{
        notFound(req, res)
    }
})

server.listen("8000", () => {
    console.log('Task Server is On!')
})

// /user 라우팅 - name
const user = (req, res) => {
    //URI에서 쿼리스트링 분리하여 name의 값으로 저장
    const {name} = parse(req.url, true).query;
    res.end(`<h1>${name}님 환영합니다😎</h1>`)
}
// /product 라우팅 - p1,p2,p3
const product = (req, res) => {
    const { p1, p2, p3 } = parse(req.url, true).query; //URI 쿼리스트링 분리
    res.end(`<h1>${p1}, ${p2}, ${p3}는 판매중입니다😍!</h1>`)
}
// PNF
const notFound = (req, res) => {
    res.statusCode = 404;
    res.end("<h1 style='text-align:center'>페이지를 찾을 수 없습니다.😥</h1>")
}

const pathMap = {
    "/user" : user,
    "/product" : product,
}
