const postService = (() => {
    const findAll = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method: "get",
            }
        );
        const posts = await response.json();
        if (callback) {
            callback(posts);
        }
    };

    const create = async (post) => {
        await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "post",
            body: JSON.stringify(post),
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
        });
    };

    const read = async (postId, callback) => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        const post = await response.json();
        if (callback) {
            callback(post);
        }
    };

    // 수정 <- 화면 부분 내가 만들기!
    // 전체적으로 새로운 내용이 담긴 post객체
    const update = async (post) => {
        const response = await fetch(
            // 몇번의 게시글을 수정할지 링크에 심어주기
            `https://jsonplaceholder.typicode.com/posts/${post.id}`,
            {
                method: "PUT",
                body: JSON.stringify(post),
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
            }
        );
        // 업데이트 된 게시글 updatedPost변수에 저장하기
        const updatedPost = await response.json();
        // 로컬 디버그 모드 작업
        console.log(updatedPost);
    };

    // // 부분 수정
    // // 부분적으로 새로운 내용이 담긴 post객체
    // const update = async (post) => {
    //     const response = await fetch(
    //         `https://jsonplaceholder.typicode.com/posts/${post.id}`,
    //         {
    //             method: "PATCH",
    //             body: JSON.stringify(post),
    //             headers: {
    //                 "Content-Type": "application/json; charset=utf-8",
    //             },
    //         }
    //     );
    //     // jsonplacehodler 서버 통해 post내용이 업데이트 됐는지 확인
    //     const updatedPost = await response.json();
    //     console.log(updatedPost); // 디버깅
    // };

    // 삭제
    const remove = async (postId) => {
        // postId값 = pk값
        await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: "DELETE",
        });
    };

    return {
        findAll: findAll,
        create: create,
        read: read,
        update: update,
        remove: remove,
    };
})();
