const userService = (() => {
    const findAll = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/"
        );
        const users = await response.json();
        if (callback) {
            callback(users);
        }
    };
    const findById = async (id, callback) => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const user = await response.json();
        if (callback) {
            callback(user);
        }
    };

    return { findAll: findAll, findById: findById };
})();
