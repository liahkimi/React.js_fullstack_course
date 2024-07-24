const userService = (() => {
    const findAll = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users",
            {
                method: "get",
            }
        );
        const users = await response.json();
        if (callback) {
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
                method: "post",
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
            }
        );
        // 추가된 회원의 정보를 createdUser(객체)에 담는다.
        const createdUser = await response.json();
        if (callback) {
            // callback 함수에 추가된 회원 객체를 전달한다.
            return callback(createdUser);
        }
    };

    // 조회
    // 회원 번호를 전달받아서
    const read = async (userId, callback) => {
        // 서버에 전달
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        // 회원 1명의 정보를 user에 담는다.
        const user = await response.json();
        if (callback) {
            // 회원 1명의 정보를 callback함수로 전달한다.
            return callback(user);
        }
    };

    // jsonplaceholder 서버에서는 patch 요청 시, 소문자로 요청하는 것을 막아놨다.
    // 그 대신, 대문자 PATCH로 요청하거나 put으로 부분 수정을 요청하면 된다.
    // CORS: 서버의 ORIGIN과 요청하는 곳의 ORIGIN이 같아야만 요청 허용
    //       서버에서는 허용할 ORIGIN을 등록함으로써 해당 PC의 요청이 가능해진다.
    // 따라서, 모든 요청 방식은 대문자로 약속한다.
    // 전체 수정
    // const update = async (user) => {
    //         const response = await fetch(
    //             `https://jsonplaceholder.typicode.com/users/${user.userId}`,
    //             {
    //                 method: "put",
    //                 body: JSON.stringify(user),
    //                 headers: {
    //                     "Content-Type": "application/json; charset=utf-8",
    //                 },
    //             }
    //         );
    //         const updatedUser = await response.json();
    //         console.log(updatedUser);
    //     };

    // 부분 수정
    // const update = async ({userId, ...rest}) => {
    //     console.log(userId);
    //     const response = await fetch(
    //         `https://jsonplaceholder.typicode.com/users/${userId}`,
    //         {
    //             method: "PATCH",
    //             body: JSON.stringify({name: '한동석'}),
    //             headers: {
    //                 "Content-Type": "application/json; charset=utf-8",
    //             },
    //         }
    //     );
    //     const updatedUser = await response.json();
    //     console.log(updatedUser);
    // };

    return { findAll: findAll, create: create, read: read, update: update };
})();
