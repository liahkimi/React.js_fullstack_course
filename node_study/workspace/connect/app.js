import { createServer } from 'http';
import { parse } from 'url';
import connect from './connect.js';
import User from './user_schema.js';

import path from 'path';
import fs from 'node:fs';
import qs from 'node:querystring';
//⭐ path, fs, qs 란?

// [1] path:파일 및 디렉토리 경로를 다루기 위한 메서드 제공하는 모듈
// ex. '/user/local/bin/file.txt';
// path.basename() : 경로에서 파일이름만 추출 'file.txt'
// path.dirname() : 경로에서 디렉터리이름만 추출 '/user/local/bin'
// path.extname() : 경로에서 확장자명만 추출 '.txt'
// path.join() : 경로 조각을 더해서 하나의 경로로 만듦. 
//=> const joinedPath = path.join('/user', 'local', 'bin', 'file.txt');
// console.log(joinedPath); // 출력: '/user/local/bin/file.txt'
// path.resolve() : 상대경로를 절대경로로 변환(현재 디렉터리 기준으로 잡음)

// [2] fs:파일시스템과 상호작용 할 수 있는 여러 메서드 제공 
// fs.readFile() : 비동기 방식으로 파일 내용 읽어들임.
// fs.writeFile() : 파일에 데이터를 작성함. 없다면 새로 생성함.
// fs.unlink() : 파일을 삭제함.

// [3] qs: 쿼리스트링을 파싱하거나 문자열로 변환하는데 사용되는 모듈. URL 처리시 사용.
// qs.parse : URL의 쿼리스트링을 객체로 변환
// qs.stringify : 객체를 url의 쿼리스트링으로 변환

// fs, qs : 폴더와 파일의 경로를 지정해주는 모듈로 join(), resolve()를 통해서 
// 위치한 경로를 절대경로로 알려준다.
// join('/a', '/b')은 전달한 경로로 a,b를 무조건 a/b/ 붙여주어야 하지만,
// resolve('/a', '/b')는 전달한 경로 중 절대 경로(/부터 시작)가 있다면 앞의 경로를 무시한다.
// resolve의 결과 : '/b'



// 내가 VScode에서 open folder로 연 경로가 절대 경로가 된다. 
// ex. workspace/login
const __dirname = path.resolve();


// MongoDB 연결!
connect();

// 서버를 구성
const server = createServer((req, res) => {
    // uri 분리
    const path = parse(req.url, true).pathname;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.statusCode = 200;

    // 라우팅 사용
    if(path in pathMap){
        pathMap[path](req, res);
    }else{
        notFound(req, res);
    }
})

// 서버를 실행
server.listen(8000, () => console.log("Router Server Start!"))

// 각각의 라우트 컨트롤러 구성
const main = (req, res) => {
    res.statusCode = 200;
    res.end("<h1 style='text-align:center'>환영합니다. Node With MongoDB 최종 실습입니다!</h1>")
}

// GET은 READ : 해당 링크에 들어오면 해당 페이지 보여주는 방식
// POST는 CREATE : 업로드


// http의 get요청 처리하는 로직
// 클라이언트-> 서버 : get 요청
// 서버 -> 클라이언트 : join.html파일 반환
const join = async (req, res) => {
    // GET 방식으로 요청을 했다면,
    if(req.method === "GET"){
        //workspace/join.html의 파일을 읽어오기
        fs.readFile(__dirname + "/join.html", (err, result) => {
            if(err){ // 에러 처리
                console.log('read error, ' + err.message );
                // 응답 헤더에 상태 코드 404(Not Found)와 콘텐츠 타입을 설정
                res.writeHead(404, {"Content-Type" : "text/html"});
                // 에러 메시지를 HTML 형식으로 클라이언트에게 반환
                res.end("<h1 style='text-align:center;'>페이지를 찾을 수 없습니다.</h1>");
            }else{
                // 응답 헤더에 상태 코드 200(성공)과 콘텐츠 타입을 설정
                res.writeHead(200, {"Content-Type" : "text/html"});
                // 읽어온 파일 내용을 클라이언트에게 반환
                res.end(result)

                //⭐ res.writeHead(statusCode, headers)는 HTTP 응답의 상태 코드와 헤더를 설정하는 함수
            }
        })

    // POST
    // 회원가입등록
    }else if(req.method === "POST"){
        let body = "";
        req.on("data", function(data){
            // body에 해당 내용을 문자열로 담는다.
            body += data;
        })
        // 서버를 위해 url로 받은 쿼리스트링 데이터를 파싱해서 db에 추가하기
        req.on("end", async function (){
            // URL의 쿼리스트링을 객체로 변환
            let data = qs.parse(body);
            // mongoose 문법을 사용해서 전달받은 정보를 collection에 추가한다.
            const userCreated = await User.create(data);
            console.log(userCreated)

            fs.readFile(
                __dirname + "/login.html",
                function(err, result){
                    if(err){
                        console.log("file read fail..:" + err.message)
                        res.writeHead(404, { "Content-Type" : "text/html" });
                        res.end("<h1 style='text-align:center;'>페이지를 찾을 수 없습니다.</h1>")
                    }else{
                        res.writeHead(200, { "Content-Type" : "text/html"} );
                        res.end(result)
                    }
                }
            )
        })
    }
}


// 로그인
const login = async (req, res) => {
    if(req.method === 'GET'){
        fs.readFile(__dirname + "/login.html", function(err, result){
            if(err){
                console.log("file read fail.. :" + err.message);
                res.writeHead(404, {"Content-Type" : "text/html"});
                res.end("<h1 style='text-align:center'>페이지를 찾을 수 없습니다.</h1>");
            }else{
                res.writeHead(200, {"Content-Type": "text/html"});
                res.end(result);
            }
        })

    }else if(req.method === 'POST'){
        let body = "";
        // POST 요청으로 받은 데이터를 body에 저장
        req.on("data", function(data){
            body += data;
        })
        // 데이터 수신이 완료되면, qs.parse로 쿼리스트링을 객체로 파싱함
        req.on("end", async function (){
            let data = qs.parse(body);
            let path = __dirname + "/login.html";
            // User.findOne으로 db에서 유저정보 조회
            const user = await User.findOne({ id: data.id });
            if(user){
                // 패스워드가 일치한다면,"/login_ok.html" 파일 경로를 설정
                if(user.password === data.password){   
                    path = __dirname + "/login_ok.html";
                }
            }
            // ⭐ req.on과 "end" 란?
            // req.on: Node.js에서 이벤트리스너를 등록하는 함수
            // req객체에서 특정 이벤트가 발생할 때 실행할 콜백함수를 지정한ㄴ다.
            // "end": 객체에서 데이터 수신이 완료되었을 때 발생하는 이벤트.


            // 일괄처리, path에 담긴 경로를 파일을 읽은 후에 경로를 응답해준다.
            fs.readFile(path, function(err, result){
                if(err){
                    console.log("file read fail... :" + err.message)
                    res.writeHead(404, {"Content-Type" : "text/html"})
                    res.end("<h1 style='text-align:center;'>페이지를 찾을 수 없습니다.</h1>")
                }else{
                    res.writeHead(200, {"Content-Type" : "text/html"})
                    res.end(result)
                }
            })

        })
    }
}

const notFound = (req, res) => {
    res.statusCode = 404;
    res.end("<h1 style='text-align:center'>페이지를 찾을 수 없습니다.</h1>")
}

// 라우팅 구성
const pathMap = {
    "/" : main,
    "/join" : join,
    "/login" : login
}