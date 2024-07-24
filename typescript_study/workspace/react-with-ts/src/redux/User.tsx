import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '../modules';
import { AppDispatch } from '..';
import { showPhone, userInsert } from '../modules/user';

const User = () => {
    // 1번 실습
    type UserProp = {
        [index:string] : string
    }

    const myUser:UserProp = {
        name : "김세환",
        email : "codefuling@gmail.com",
        address : "경기도 구리시",
        phone : ""
    }

    const dispatch = useDispatch<AppDispatch>()
    const userProfile = useSelector((state:ReduxState) => state.user.user);

    // 2번 실습
    const [value, setValue] = useState("");
    const onChangeValue = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    
    const myPhone:UserProp = {
        ...myUser,
        phone : value,
    }

    return (
        <div>
            <div>
                <h1>{userProfile && userProfile.name}</h1>
                <button onClick={() => {
                    dispatch(userInsert(myUser))
                }}>유저 등록!😎</button>
            </div>
            <div className="마이클">
                {userProfile.phone && <h1>휴대폰 번호 : {userProfile.phone}</h1>}
                <input type="text" onChange={onChangeValue} value={value} />
                <button onClick={()=>{
                    dispatch(showPhone(myPhone))
                }}>핸드폰 등록!😆</button>
            </div>
        </div>
    );
};

export default User;