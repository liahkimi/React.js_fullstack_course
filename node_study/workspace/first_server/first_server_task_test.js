import http from 'k6/http'
// 제작 후 k6를 통해 100명이 10초동안 동시에 요청하는 성능 테스트를 진행한다.
export const options = {
    vus : 100,
    duration : "10s"
}

export default function(){
    http.get("http://localhost:8000");
}