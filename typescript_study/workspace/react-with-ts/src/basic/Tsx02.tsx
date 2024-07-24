import React from 'react';
import { User } from './models/User';

type UserProps = {
    user : User
}

const Tsx02 = ({user}:UserProps) => {
    
    const {name, phone} = user;

    return (
        <div>
            <h1>{name}</h1>
            <h1>{phone}</h1>
        </div>
    );
};

export default Tsx02;