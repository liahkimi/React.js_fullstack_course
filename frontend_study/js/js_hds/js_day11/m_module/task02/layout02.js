const postLayout = (() => {
    const showList = (posts) => {
        posts.forEach((post) => {
            console.log(post.title);
        });
    };

    return { showList: showList };
})();
