
import { createAction, handleActions } from "redux-actions";

// 상수로 type 고정
const INCREASE = "count/INCREASE" as const;
const DECREASE = "count/DECREASE" as const;

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);


// 액션의 리턴타입
type CounterAction =
    | ReturnType<typeof increase>
    | ReturnType<typeof decrease>

    
type InitialProps = {
    number: number;
}

const initialState:InitialProps = {
    number : 0
}

// reducer 제작
const count = handleActions<InitialProps>({
    [INCREASE] : (state:InitialProps, action:CounterAction) => ({number : state.number + 1}),
    [DECREASE] : (state:InitialProps, action:CounterAction) => ({number : state.number - 1}),
}, initialState)

export default count;













