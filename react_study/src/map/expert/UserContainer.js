import React from 'react';
// import {useAsync} from 'react-async'; // react-async 모듈 안에 많은 객체들이 있어 비구조화할당으로 가져온다.
// import User from './User';
import Users from './Users';


// 비동기함수는 컴포넌트 안에서 사용하면 무한로딩에 빠진다.
// (리액트 버전업데이트 이후 해결된듯. 기존방식으로 외부에 선언해봤지만, useAsync 안되어 내부에 선언했다가 일단 pass..)
// 상태 및 useEffect 배운 뒤, 공부하기로 함.
//     const getUsers = async () => {  
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const users = await response.json()
//         return users;
//     }
//    getUsers().then()
// 랜더링-> 마운트-> fetch가 비동기함수 호출 -> 펜딩상태 -> fullfilled되면 상태 변경 
// => 다시 랜더링 -> 마운트 ..... 
// 그래서 비동기함수는 컴포넌트안에서 사용하면 useEffect 없이는 무한로딩에 빠지곤 했다.



const UserContainer = () => {
    // const {value, isResolved} = useAsync({promiseFn : getUsers}); // promiseFunction 값으로 getUsers 비동기함수를 값으로 할당
    // console.log(value) // undefined (리액트 업데이트 이후 바뀐듯..)
    // console.log()
    // const {value, isResolved} = useAsync({promisFn : getUsers})

    const users = [
        {
            id : 1,
            name : '김세환',
            email : 'codefuling@gmail.com'
        },
        {
            id : 2,
            name : '홍길동',
            email : 'hkd1234@gmail.com'
        },
        {
            id : 3,
            name : '신짱구',
            email : 'zzangoo@gmail.com'
        },
        {
            id : 4,
            name : '장보고',
            email : 'jbg4567@gmail.com'
        },
    ]

    // 😎실습 : 화면쪽에 컨테이너로만 유저의 이름과 이메일을 출력하기

    // 차근 차근 써보자.
    // const userList = users.map((user) => console.log(user))

    // 난이도1 User컴포넌트로 분리하기
    // const userList = users.map((user, i , users)=><User key={i} user={user}/>)

    // 난이도3 Users - User로 분리하기
    const userList = <Users users={users}/> // Users컴포넌트로 users객체배열을 보내주기

    return (
        <div>
            {userList}
        </div>
    );
};

export default UserContainer;