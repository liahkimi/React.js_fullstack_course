import React, { useState } from 'react';

const Sound = () => {
    // 강아지 버튼, 고양이 버튼
    // 강아지 버튼을 눌렀을 때 강아지의 울음소리가 나오도록 출력
    // 고양이 버튼을 눌렀을 떄 고양이 울음소리가 나오도록 출력

    const [sound, setSound] = useState("");
    const dogButton = () => {
        setSound("멍멍 오늘 화요일 화난다!😣")
    }
    const catButton = () => {
        setSound("고양이는 야옹!🙂")
    }

     return (
        <div>
            {/* p태그에 상태감지가 되어 지웠다가 리랜더링되어 보여짐 */}
            <p>{sound}</p>
            <button onClick={dogButton}>강아지 버튼</button>
            <button onClick={catButton}>고양이 버튼</button>
        </div>
    );
};

export default Sound;