import React, { ReactNode, createContext, useState } from 'react';

// 컴포넌트를 통해 전달한 value type을 generic으로 이용

// Context에 저장된 동물 세 마리를 버튼으로 출력
// input에 동물 입력 후 엔터: 동물 버튼 추가
// 동물 버튼 클릭 시 해당 버튼 삭제
// 각 Context에 선언된 insert()와 remove() action을 사용!

export type ContextValues = {
    state : {animals : string[]};
    actions : { insert : (value:string) => void , remove : (index:number) => void }
}

// 초기값을 넣기위한 변수를 설정
export const initialValues : ContextValues = {
    state : { animals : [] },
    actions : { insert : () => {}, remove : () => {} }
}

// context 초기값을 설정
const AnimalsContext = React.createContext<ContextValues>(initialValues);

// Provider 생성
// children의 type == React.ReactElement, React.ReactNode를 권장;
type Props = {
    children : ReactNode;
}

const AnimalsProvider = ({children}:Props) => {
    const [animals, setAnimals] = useState(["누렁이", "치즈", "점박이"]);

    const insert = (animal:string) => {
        setAnimals(animals.concat(animal))
    }

    const remove = (index:number) => { 
        setAnimals(animals.filter((animal, i) => i !== index));
    }

    const value = {
        state : { animals : animals },
        actions : { insert : insert, remove : remove }
    }

    return (
        <AnimalsContext.Provider value={value}>
            {children}
        </AnimalsContext.Provider>
    )

}

export { AnimalsContext, AnimalsProvider };