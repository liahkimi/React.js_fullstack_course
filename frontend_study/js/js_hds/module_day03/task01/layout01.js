const userLayout = (() => {
    const showList = (users) => {
        let text = ``;
        users.forEach((user) => {
            // 각 회원마다 상세보기로 이동할 수 있는 a태그를 만들어준다.
            text += `
                <tr>
                    <td>${user.id}</td>
                    <td><a class="go-detail" href="${user.id}">${user.name}</a></td>
                    <td>${user.address.street}</td>
                    <td>${user.address.suite}</td>
                    <td>${user.address.city}</td>
                    <td>${user.address.zipcode}</td>
                </tr>
            `;
        });
        return text;
    };

    const showCreatedUser = (createdUser) => {
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
    };

    const showUser = (user) => {
        // 서버로부터 받아온 회원 1명 정보를
        // 화면 형식에 맞는 태그(문자열)로 변경한다.
        return `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.address.street}</td>
                <td>${user.address.suite}</td>
                <td>${user.address.city}</td>
                <td>${user.address.zipcode}</td>
            </tr>
        `;
    };

    const updateUser = (user) => {
        return `
            <tr>
                <td>${user.id}</td>
                <td><input type="text" value="${user.name}"></td>
                <td><input type="text" value="${user.address.street}"></td>
                <td><input type="text" value="${user.address.suite}"></td>
                <td><input type="text" value="${user.address.city}"></td>
                <td><input type="text" value="${user.address.zipcode}"></td>
            </tr>
        `;
    };

    return {
        showList: showList,
        showCreatedUser: showCreatedUser,
        showUser: showUser,
        updateUser: updateUser
    };
})();
