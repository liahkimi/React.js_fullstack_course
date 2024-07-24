import React, { useState } from 'react';
import { StateUser } from './models/user';

const GenericState = () => {

    const userData:StateUser = {
        name : "초기 유저",
        age : 0,
        status : [""],
    }

    const changeUser:StateUser = {
        name : "김세환",
        age : 17,
        status : ["여러가지", true, "value", 30],
    }

    const [user, setUser] = useState<StateUser>(userData);
    const onClickToChangeUser = () => {
        setUser(changeUser)
    }
    
    return (
        <div>
            <h1>{user.name}</h1>
            <button onClick={onClickToChangeUser}>체인지</button>
        </div>
    );
};

export default GenericState;