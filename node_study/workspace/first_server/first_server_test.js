// k6 import
import http from 'k6/http'
// 서버를 테스트 하는 코드이므로, 서버를 끄면 안된다.

// "200명이 동시에 10초동안에 요청을 보내는 테스트 코드"

// 테스트 옵션 설정
export const option = {
    vus : 200, // virtual users의 약자로, 가상 유저를 설정한다.
    duration : "10s" // 테스트를 진행할 시간(초)
}// <= 🤔왜 run k6할떄, vus가 1명이죠? 200명으로 테스트 설정해뒀는데..!

// 서버 실행해서 테스트하기
export default function ( ){
    http.get("http://localhost:8000");
}

// 데이터량 관리는 곧 비용관리