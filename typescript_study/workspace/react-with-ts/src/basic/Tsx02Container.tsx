import React from 'react';
import Tsx02 from './Tsx02';
import { User } from './models/User';

// React.FC란
// React에서 함수형 컴포넌트를 정의 할 때 사용하는 TypeScript의 Type이다.

const Tsx02Container:React.FC = () => {

    const user:User = {
        name : "김세환",
        age : 20,
        address : "경기도 구리시",
        hobby : {
            main : "잠자기",
            sub : "놀고 먹기"
        },
        phone : "0100000000",
        recommender : [
            {name : "홍길동", age : 30, address : "서울시 강남구"},
            {name : "장보고", age : 17, address : "경기도 남양주시"},
            {name : "김철수", age : 24, address : "서울시 중랑구"},
        ]
    }

    return (
        <div>
            <Tsx02 user={user} />
        </div>
    );
};

export default Tsx02Container;