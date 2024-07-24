import { ObjectId } from "mongodb"; // mongodb의 objecid를 쓰기위해
import { Schema, model } from "mongoose";

const postSchema = new Schema(
    {
        title : { type : String, required : true },
        content : { type : String, required : true },
        user : { type : ObjectId, ref : "User", required : true }
        // Mongoose에서 ObjectId를 사용하는 이유:
        // 1. MongoDB의 기본 식별자 유형이 ObjectId이기 때문
        // MongoDB는 _id 필드를 사용하며, 기본적으로 이 _id 필드는 ObjectId 유형
        // 2. Mongoose 스키마에서 ObjectId를 사용하는 주요 이유 중 하나는 다른 문서와의 관계를 설정하기 위해서
        // ObjectId는 관계형 데이터베이스의 외래 키(FK)와 유사한 개념

        // ref
        // 어떤 참조객체에서 참조할 것인지
    },
    { timestamps : true } // 작성일 생성
)
// model("객체명", 스키마, "컬렉션(테이블)명")
export default model("Post", postSchema, "post")
