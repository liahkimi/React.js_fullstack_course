import React, { useRef, useState }  from 'react';

// 🌟🌟😎실습
// 1. 사용자가 이름을 입력하고 완료버튼을 누르면, p태그에 이름이 작성되도록 구현
// 2. 사용자가 입력한 이름을 p태그에 실시간으로 작성되도록 구현
// 3. 완료버튼을 클릭하면 p태그와 입력창에 뜬 이름 뒤에 "님"이 붙도록 구현
/* 
    이번엔 input에 입력한 이름을  onChange로 이벤트 감지해서 p태그에 작성되도록 useState만으로 구현하는게 아닌,
    useState와 useRef를 같이 사용하여, input에 이름입력 후, button을 클릭했을때 onClick으로 이벤트를 감지해서 
    아무 관련 없는 p태그를 참조해서  p태그와 input태그에 각각 입력한 값을 출력해줘야한다. 
    */

    const Name = () => {
     
    // result의 상태 관리
    const [result, setResult] = useState();

    // input 가져오기(input의 ref 참조값)
    const inputRef = useRef();

    // p태그 가져오기(p의 ref 참조값)
    const nameRef = useRef();

    // 1. 사용자가 이름을 입력하고 완료버튼을 누르면, p태그에 이름이 작성되도록 구현
    // 3. 완료버튼을 클릭하면 p태그에 작성된 이름 뒤에 "님"이 붙도록 구현
    // [button 이벤트]
    const onClickToPutName = () =>{
        // onClick은 버튼을 누르기만 하기에, e이벤트객체를 인자로 넣을  필요x

        // 🌟button 눌렸을 때 input값을 가져오는 방법 : 
        // 만들어진 inputRef로 input을 참조해서 input에 있는 값을 보여주면 된다.
        // console.log(inputRef) //{current:input} => inputRef.current.value = 입력한값
        // console.log(inputRef.current.value) //입력한 값 출력됨

        // (input에 입력한 값 +님)이 result변수를 통해 p태그에 출력된다.
        setResult(inputRef.current.value + "님") 

        // 4. 완료버튼 클릭하면 입력창에 있는 이름에도 "님"이 붙도록 구현
        // 🌟p태그에 출력된 값을 nameRef로 참조해서 "님"을 붙인 뒤, input의 value값으로 넣는다.
        // => p태그와 input을 동기화시켜주기 위해 p태그의 result값을 input의 value로 넘겨준 것!

        // setResult(nameRef.current.innerText + "님") 
        // 없어도 동기화 되는 이유 : input태그에 value값으로 result를 넣어줌으로써 동기화가 해결 된다.
    };

    
    // 2. 사용자가 입력한 이름을 p태그에 실시간으로 작성되도록 구현
    // [input 이벤트]
    const onChangeSetName = (e) =>{ 
        // = input에 무언가 입력됨이 감지되면 입력한 값을 result로 넘겨줘.
        setResult(e.target.value)
    }
   
    return (
        <>
            <input ref={inputRef} type="text" onChange={onChangeSetName} value={result}/>
            <p ref={nameRef}>{result}</p>
            <button onClick={onClickToPutName}>완료 버튼</button>
        </>
    );
};

export default Name;