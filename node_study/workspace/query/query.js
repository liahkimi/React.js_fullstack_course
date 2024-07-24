// query로 query-string을 통해 서버로 데이터 전달해보기

// module-import
import { createServer } from 'http'
import { parse } from 'url';

// http서버 생성- req,res객체를 이용해 응답 처리
// = 화면에서 요청오면 응답할 준비 하는 것
const server = createServer((req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.statusCode = 200;

    // url에서 path(경로) 추출
    const path = parse(req.url, true).pathname;

    // 경로에 따라 핸들러함수 호출
    if (path in pathMap){
        pathMap[path](req, res);
    }else{
        notFound(req, res)
    }
})

// 서버 시작
server.listen("8000", () => {
    console.log("Router server Start!")
})


// path의 핸들러함수 선언

// 신상품 소개
const newProduct = (req, res) => {
    // 쿼리스트링 분리 (URI에서 ?물음표 기준으로 뒤의 데이터값이 쿼리스트링)
    const query = parse(req.url, true).query;
    res.end(
        `
            <h1 style="text-align:center;">신상품 소개</h1>
            <ul style="text-align:center; list-style:none">
                <li>${query.new1}</li>
                <li>${query.new2}</li>
            </ul>
        `
    )
}
z
// 핫상품
const hotProduct = (req, res) => {
    const query = parse(req.url, true).query;
    res.end(
        `
            <h1 style="text-align:center;">🍗핫상품🍗 소개</h1>
            <ul style="text-align:center; list-style:none">
                <li>${query.hot1}</li>
                <li>${query.hot2}</li>
            </ul>
        `
    )
}

// PNF
const notFound = (req, res) => {
    res.statusCode = 404;
    res.end("<h1 style='text-align:center'>페이지를 찾을 수 없습니다.😥</h1>")
    // 페이지를 찾을 수 없습니다.
}

// pathMap에 path와 핸들러함수 매핑
const pathMap = {
    "/new" : newProduct,
    "/hot" : hotProduct,
};




