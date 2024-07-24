import React from 'react';
import { User } from './models/user';

type UserProps = {
    users : User[]
} 

const User01 = ({users}:UserProps) => {
    return (
        <div>
            {users && users.map((user, i)=> <li key={i}>{user.name}</li>)}
        </div>
    );
};

export default User01;