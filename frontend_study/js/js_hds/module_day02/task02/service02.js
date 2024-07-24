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

    return { findAll: findAll, create: create, read: read };
})();
