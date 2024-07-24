import mongoose from "mongoose"
// DB 연결
const connection_url = `mongodb+srv://app:1234@app.yk55qkd.mongodb.net/`

const connect = () => {
    // 디버깅 모드
    if(process.env.NODE_ENV !== "production"){
        mongoose.set("debug", true)
    }
    mongoose    
        .connect(connection_url, {
            // DB이름 = 프로젝트 이름
            dbName : "app"
        })
        .then(()=> {
            console.log("Connected to MongoDB")
        })
        .catch((err) => {
            console.error("Connected fail to MongoDB!")
            console.log(err)
        })
}

export default connect;