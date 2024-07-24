//⭐ MongoDB 데이터베이스를 Mongoose를 사용하여 연결하는 코드
// Mongoose는 Node.js 환경에서 MongoDB와 상호작용하기 위한 객체 데이터 모델링(ODM) 라이브러리
// 하나의 양식(=스키마)을 만들어서 mongodb와 데이터를 주고 받음.

// powershell
// > yarn add mongoose //설치

import mongoose from "mongoose";

// 본인 mongoDB 링크 넣기
const connection_url = `mongodb+srv://app:1234@app.yk55qkd.mongodb.net/` 

// 환경이 "production(배포)"이 아니라면 디버그 모드 활성화
const connect = () => {
    if(process.env.NODE_ENV !== "production"){
        // 디버그 true로 설정하여 SQL문이 콘솔에 출력된다.
        mongoose.set("debug", true);
    }

// 몽구스 데이터베이스에 연결
    mongoose
        .connect(connection_url, {
        // 필요한 설정들 (옵션들 ex. 데이터베이스 이름, 인증 정보 ..)을 여기에 추가할 수 있습니다.

        // 컬렉션을 관리하는 database 이름 설정
            dbName : "users" // 프로젝트의 이름(데이터베이스 이름)
        }).then(()=> {
            // 연결 성공 시
            console.log("Connected to MongoDB!")
        })
        .catch(() => {
            // 연결 실패 시
            console.error("Connected fail to MongoDB!")
            console.log(err)
        })  
    }

  

    export default connect;