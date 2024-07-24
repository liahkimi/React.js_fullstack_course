import React, { useState } from 'react';
import Counter from './Counter';

const CountContainer = () => {
    const [number, setNumber] = useState(0);
    const increase = () => {
        setNumber(number + 1);
    }
    const decrease = () => {
        setNumber(number - 1);
    }

    return (
        <div>
            <h1>{number}</h1>
            <Counter increase={increase} decrease={decrease}/>
        </div>
    );
};

export default CountContainer;