import React from 'react';

const Tsx01 = () => {
    // 설명형 문법
    const name:string = "김세환";
    const message:string = "Hello, World!";
    const isTrue:boolean = true;
    const arr:[] = [];
    const numArr:number[] = [1, 2, 3];
    const strArr:string[] = ["김세환", "홍길동", "장보고"];
    const obj:{} = {};

    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
};

export default Tsx01;