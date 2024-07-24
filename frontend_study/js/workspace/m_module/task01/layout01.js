const userLayout = (() => {
    const showList = (users) => {
        users.forEach((user) => {
            console.log(user.name);
        });
    };

    return { showList: showList };
})();
