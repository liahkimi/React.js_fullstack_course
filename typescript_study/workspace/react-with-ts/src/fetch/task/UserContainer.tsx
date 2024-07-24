import React, { useEffect, useState } from 'react';
import User01 from './User01';
import { User } from './models/user';
// 유저 정보 fetch로 가져와서
// User 컴포넌트로 분리후 화면에 이름 출력하기
// 50분까지 실습!

const UserContainer = () => {
    // https://jsonplaceholder.typicode.com/users
    const [users, setUsers] = useState<User[]>([]);
    useEffect(()=>{
        const getUsers =  async <T extends User[]>():Promise<T> => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const users = await response.json();
            return users;
        }
        getUsers().then(setUsers)

    }, [])
    return (
        <div>
            <User01 users={users}/>
        </div>
    );
};

export default UserContainer;