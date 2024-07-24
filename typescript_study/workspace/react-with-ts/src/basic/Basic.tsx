// React 18 이상에서 React.FC children 사라졌고,
// PropsWithChildren으로 명시한다.
// const Layout:React.FC<React.PropsWithChildren> = ({children}) => {
//     return <></>
// }

import React from 'react';

type BasicProps = {
    printConsoleName : () => void;
}

const Basic:React.FC<BasicProps> = ({printConsoleName}:BasicProps) => {
    return (
        <div>
            <button onClick={printConsoleName}>버튼</button>
        </div>
    );
};

export default Basic;