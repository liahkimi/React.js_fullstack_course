// http 모듈 가져오기
// *require() 대신 import를 편하게 쓰기 위해 package.json에  "type": "module" 설정 변경해줌.
import http from 'http'; 
// import {createServer} from 'http'; //<=🤔왜 이렇게 안가져와도 되죱?

let count = 0;

const log = (count) => {
    console.log((count += 1))
}
// createServer(): 서버 객체를 만들어서 반환한다.
const server = http.createServer((req, res) => {  // req: 서버에 요청하는 것들 res: 이 서버를 통해서 화면쪽으로 보낼 데이터들
    log(count);
    // response 객체
    // setHeader(헤더의이름, 값): 응답 헤더를 개]]별적으로 설정.
    // content-type을 html로 설정, 문자 인코딩을 UTF-8로 설정(브라우저가 응답을 제대로 해석할 수 있게 해줌)
    res.setHeader('Content-Type', 'text/html; charset=utf-8') 
    // write : 응답 본문 작성
    res.write("hi👻\n") 
    // 응답 종료 지연
    setTimeout(()=>{ 
        // res.end() : 응답을 종료하고 문자열을 추가로 보내서, 클라이언트는 3초 후에 전체 응답을 받게 된다.
        res.end('Node.js 첫 서버')
    },3000)
    
})

// port : 49152 ~ 65535
// 0~1023, 1024~49152은 시스템에 기본으로 사용하는 포트가 있을 수 있어서
// 충돌을 피하기 위해 보통은 49152부터 사용한다.
server.listen(8000);