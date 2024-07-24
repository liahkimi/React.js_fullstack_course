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
        if(callback){
            callback(post);
        }
    };

    // 수정
    // const update = async (post) => {
    //     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`,{
    //         method: 'PUT',
    //         body: JSON.stringify(post),
    //         headers: {
    //             'Content-Type': 'application/json; charset=utf-8'
    //         }
    //     });
    //     const updatedPost = await response.json();
    //     console.log(updatedPost);
    // }

    // 부분 수정
    const update = async (post) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`,{
            method: 'PATCH',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        });
        const updatedPost = await response.json();
        console.log(updatedPost);
    }

    // 삭제
    const remove = async (postId) => {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'DELETE'
        });
    }

    return { findAll: findAll, create: create, read: read, update: update, remove: remove };
})();
