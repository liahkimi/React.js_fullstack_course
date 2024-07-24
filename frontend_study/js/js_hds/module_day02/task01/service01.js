const userService = (() => {
    const findAll = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users",
            {
                method: "get",
            }
        );
        const users = await response.json();
        if (callback){
            return callback(users);
        }
    };

    // 회원가입
    // 화면에서 입력한 회원 정보를 user 객체로 한번에 받는다.
    const create = async (user, callback) => {
        // 전달받은 회원 정보를 서버에 전달한다.
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users", 
            {
                method: 'post',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            }
        );
        // 추가된 회원의 정보를 createdUser(객체)에 담는다.
        const createdUser = await response.json();
        if(callback){
            // callback 함수에 추가된 회원 객체를 전달한다.
            return callback(createdUser);
        }
    }

    // 조회
    const read = async (userId, callback) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const user = await response.json();
        console.log(user);
        if (callback){
            return callback(user);
        }
    }


    return { findAll: findAll, create: create, read: read };
})();
