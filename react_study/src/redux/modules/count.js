import {createAction, handleActions} from 'redux-actions'


// actions의 타입 (action이 발생했을때 들고가는 type)
const INCREASE = "count/INCREASE";
const DECREASE = "count/DECREASE";

// actions을 생성
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// state 초기값 설정
const initialState = {
    number : 0
}


// 리듀서 생성시 사용하는 스위치문
// const reducer = (state, action) => {
//     switch (action) {
//         case INCREASE :
//             action.setNumber(state.number + 1)
//         case DECREASE :
//             action.setNumber(state.number - 1)
//     }
// }

// reducer 제작 - hook함수인 handleActions 사용이 더 편리
const count = handleActions({
    [INCREASE] : (state, action) => ({number : state.number + 1}),
    [DECREASE] : (state, action) => ({number : state.number - 1}),
}, initialState)

export default count;