import React, { ReactNode } from 'react';
import B from './B';

// 컴포넌트를 통해 전달한 value type을 generic을 이용
export type ContextValues = {
  color: string;
}
// 초기값을 넣기위한 변수 설정
export const initialValues:ContextValues = {
  color: "",
}

// context 초기값 설정
export const AContext = React.createContext<ContextValues>(initialValues);


type Props = {
  children : ReactNode;
}
const AProvider = ({children} : Props) => {
  return (
    <div>
      <AContext.Provider value={{color: "blue"}}>
        <B />
      </AContext.Provider>
    </div>
  );
};

export default AProvider;