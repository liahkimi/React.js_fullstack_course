const postLayout = (() => {
    const showList = (posts) => {
        const tbody = document.querySelector("table.post-table tbody");
        let text = ``;
        posts.forEach((post) => {
            text += `
                <tr>
                    <td>${post.id}</td>
                    <td>${post.title}</td>
                </tr>
            `;
        });
        tbody.innerHTML = text;
    };

    return { showList: showList };
})();
