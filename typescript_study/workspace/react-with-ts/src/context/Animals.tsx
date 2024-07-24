import React, { useContext, useState } from 'react';
import { AnimalsContext } from './AnimalsContext';
import Animal from './Animal';
import useInput from './basic/useINput';

const Animals = () => {

    // Context에 저장된 동물 세 마리를 버튼으로 출력
    // input에 동물 입력 후 엔터: 동물 버튼 추가
    // 동물 버튼 클릭 시 해당 버튼 삭제
    // 각 Context에 선언된 insert()와 remove() action을 사용!
    // KeyboardEvent
    // 20분

    const {state, actions} = useContext(AnimalsContext);
    const [input, onChangeInput] = useInput("");
    const onKeyUpToAddAnimal = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter"){
            actions.insert(input)
        }
    }

    const styleFlex = { display : "flex" }
    const styleList = { listStyle : "none" }

    return (
        <div>
            <input type="text" 
                value={input} 
                onChange={onChangeInput} 
                onKeyUp={onKeyUpToAddAnimal}
            />
            <Animal styleFlex={styleFlex} styleList={styleList}/>            
        </div>
    );
};

export default Animals;