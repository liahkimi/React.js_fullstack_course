const postService = (() => {
    // 전체 조회
    const findAll = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/"
        );
        const posts = await response.json();
        if (callback) {
            callback(posts);
        }
    };

    // 단일 조회
    const findById = async (id, callback) => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        const post = await response.json();
        if (callback) {
            callback(post);
        }
    };

    return { findAll: findAll, findById: findById };
})();
