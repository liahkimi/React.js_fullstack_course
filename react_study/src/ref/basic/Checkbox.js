import React, { useState } from 'react';

// 😎선택한 체크박스의 이름을 출력하기
// => 회원가입의 약관동의 체크란에서 활용 가능

const Checkbox = () => {
    // 여러개의 체크박스를 클릭하면, 들어갈 값도 여러개여서 array로 받는다.
    const [message, setMessage] = useState([])

    // 체크박스 클릭 이벤트
    const onClickToCheck = (e) =>{
        // 🌟체크 했을 때만,
        if(e.target.checked){
            let value = e.target.value;
            // message는 array이므로 추가시키는 방법은 concat, filter, push 
            // => 새로운 배열을 리턴하는 concat 메서드 사용하기! (push는 새로운배열 리턴 안해서 사용x)
            setMessage(message.concat(value))  //권장(ES5-BABEL번역필요X,성능좋음)
            // setMessage([...message, value]) // spread문법도 가능
        }else{
            //🌟체크 해제시 해당 값은 filter로 배열에서 뺀 뒤 새로 추출하여 보여줌
            setMessage(message.filter((message)=>message !== e.target.value))
        }
    }

    return (
        <div>
            <div>
                <span>front-end</span>
                <input type="checkbox" value="front-end" onClick ={onClickToCheck}/>
            </div>
            <div>
                <span>back-end</span>
                <input type="checkbox" value="back-end" onClick ={onClickToCheck}/>
            </div>
            <div>
                <span>ai</span>
                <input type="checkbox" value="ai" onClick ={onClickToCheck}/>
            </div>
            <div>
                <h1>{message.map((message,i)=><p key={i}>{message}</p>)}</h1>
            </div>
        </div>
        
    );
};

export default Checkbox;