// 회원
// 번호, 이름
let user = {
    id: 1,
    name: "한동석",
};

// 프로필 사진
// 번호, 경로(2024/02/13/a.png)
let profile = {
    id: 2,
    path: "2024/02/13/a.png",
    user: user,
};

const fullPath = `upload/${profile.path}`;
console.log(fullPath);
