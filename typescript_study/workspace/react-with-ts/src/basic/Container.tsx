import React from 'react';
import Basic from './Basic';

const Container:React.FC = () => {
    const name:string = "김세환";
    const printConsoleName = () => {
        console.log(name)
    }
    return (
        <div>
            <Basic printConsoleName={printConsoleName}/>
        </div>
    );
};

export default Container;