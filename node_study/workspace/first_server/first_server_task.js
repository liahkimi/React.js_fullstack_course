// 어떤 요청에도 "Good-Bye"를 응답하는 서버 제작하기
// 제작 후 k6를 통해 100명이 10초동안 동시에 요청하는 성능 테스트를 진행한다.

import {createServer} from 'http';

const server =createServer((req,res) => {
    // 데이터 타입 설정
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('<h1>Good-Bye🤔</h1>');
})
// 서버 실행 8000번 포트
// 어떤 요청에도 "Good-Bye"를 응답
server.listen("8000", () => console.log("Server Start!💥"));

// nodemon의 장점
// 요청 방식을 변경해도 자동으로 서버를 재실행해준다.(node는 불가. 수동으로 재시작해야함.)