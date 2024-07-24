
// 1. 중첩 다이나믹 라우팅으로 userEmail, userPhone 받아서 화면에 출력하기
// 2. userEmail이 test123라면 
// 3. “환영합니다. userEmail님!”
// 4. “회원님의 전화번호는 userPhone입니다. 출력”
// 5. 아니라면 “userEmail”만 출력
// 6. 사용자가 쿼리스트링으로 price를 입력했다면 price를 h1태그로 출력

type Params = {
    userName : string,
    userAge : string,
}

function page({ params }:{ params : Params }) {

    const { userName, userAge } = params;

    return (
        <div>
            <h1>유저의 이름 : {userName}</h1>
            <h1>유저의 나이 : {userAge}</h1>
        </div>
    );
}

export default page;