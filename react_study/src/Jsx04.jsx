import React from 'react';

const Jsx04 = () => {
    // 값이 없을 경우 대비
    const name = undefined || '기본값'
    // JS에서 OR연산자는 앞의 값이 falsy값이면 뒤의값을 변수에 할당한다.
    
    // 상태에 따라서 화면이 변경된다.
    const login = true;
    const guest = true;

    return (
        // return 문 안에 있는 JSX가 실제로 컴포넌트의 UI를 결정하고, 
		// 이것이 함수형 컴포넌트의 render() 함수에 해당한다.

        <div>
            {name}

            {/* return되는 컴포넌트 안에서는 {if()} if문을 사용할 수 없다.*/} 
            
            {/* JS에서 AND연산자는 앞의값이 false이면 뒤의값을 실행하지 않음 */}
            {/* guest라면 비회원으로 로그인 되었다고 말해주기 */}
            {/* login과 guest가 true여야만 실행되는 문구 */}
            { login && guest && (
                <div>
                    <h1>비회원으로 로그인이 되었습니다.😎</h1>
                </div>
            )}

            {/* 리액트는 삼항연산자를 지원한다. */}
            { login ? (
                <h1>{name}님 환영합니다</h1>
            ) : (
                <h2>로그인 실패</h2>
            )}

        </div>
    );
};

export default Jsx04;