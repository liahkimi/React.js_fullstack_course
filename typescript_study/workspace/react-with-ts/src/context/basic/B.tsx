import React from 'react';
import { AContext } from './A';

const B = () => {
  return (
    <div>
      <AContext.Consumer>
        {
          (context) => <p style={{color: context.color}}>안녕하세요. 컨텍스트 입니다.😎</p>
        }
      </AContext.Consumer>
    </div>
  );
};

export default B;