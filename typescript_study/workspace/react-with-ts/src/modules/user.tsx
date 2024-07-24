// 실습 20분
/* 
    #1 버튼을 누르면 유저의 정보를 redux에 추가 후
    state값 콘솔에 출력하기

    userInsert
    myUser = {
        name : "김세환",
        email : "codefuling@gmail.com",
        address : "경기도 구리시",
        phone : ""
    }


 #2 유저에게 연락처를 입력 받아서 화면에 h1태그로 출력하기
    showPhone
*/

import { createAction, handleActions } from "redux-actions";

// redux 타입을 생성
const USER_INSERT = "user/USER_INSERT" as const;
const SHOW_PHONE = "user/SHOW_PHONE" as const;

// 액션 생성
export const userInsert = createAction(USER_INSERT);
export const showPhone = createAction(SHOW_PHONE);

// 액션의 리턴타입 생성
type userAction =
    | ReturnType<typeof userInsert>
    | ReturnType<typeof showPhone>;

// 초기값 타입
type InitialProp = {
    user : { [index : string] : string };
}

// 초기값
const initialState:InitialProp = {
    user : {
        name : "",
        email : "",
        address : "",
        phone : "",
    }
}

// 리듀서
const user = handleActions<InitialProp>({
    [USER_INSERT] : (state:InitialProp, action:userAction) => ({user: action.payload}),
    [SHOW_PHONE] : (state:InitialProp, action:userAction) => ({...state, user:action.payload})
}, initialState)

export default user;

