const userLayout = (() => {
    const showList = (users) => {
        let text = ``;
        users.forEach((user) => {
            text += `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.address.street}</td>
                    <td>${user.address.suite}</td>
                    <td>${user.address.city}</td>
                    <td>${user.address.zipcode}</td>
                </tr>
            `;
        });
        return text;
    };

    const showUser = (createdUser) => {
        // 새롭게 추가된 회원의 정보(객체)를
        // 화면 형식에 맞는 태그(문자열)로 변경한다.
        return `
            <tr>
                <td>${createdUser.id}</td>
                <td>${createdUser.name}</td>
                <td>${createdUser.street}</td>
                <td>${createdUser.suite}</td>
                <td>${createdUser.city}</td>
                <td>${createdUser.zipcode}</td>
            </tr>
        `;
    }

    return { showList: showList, showUser: showUser };
})();
