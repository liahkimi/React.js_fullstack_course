import { Schema, model } from "mongoose";

// 스키마 생성 시, 선언 가능 타입들
// String : 문자열로 선언
// Number : 숫자로 선언
// Date : 날짜 타입으로 선언
// Boolean : 불린으로 선언
// Mixed : 무엇이든 가능한 타입으로 선언
// ObjectId : 다른 스키마를 참조할 때 선언(속성 중, ref와 같이 사용)
// Array : [] 기호를 사용해서 선언, {names : [String]}

// 스키마 생성 시, 추가 속성
// required : boolean, 해당 속성이 필수인지 여부
// default : 기본값 설정
// validate : function, 유효성 검증 함수 추가, 리턴은 boolean
// immutable : boolean, true로 설정 시 값을 변경할 수 없다.(영속성)
// unique : boolean, 해당 속성에 유니크(중복없음)와 인덱스(조회 성능 향상)를 정의할지 여부
// timestamp : boolean, 작성 날짜와 수정 날짜가 자동으로 추가된다.
// ref : string, 참조할 스키마의 이름을 작성하면, 해당 스키마의 ObjectId를 담을 수 있다.

// 틀을 찍어내기
const userSchema = new Schema({
    email : { type : String, unique : true, required : true },
    name : { type : String, required : true },
    age : Number,
})

// model("객체명", 스키마, "컬렉션(테이블)명")
// 만든 schema를 하나의 model 양식으로 내보내는 것
export default model("User", userSchema, "user"); // user = 페이지네임(테이블명)