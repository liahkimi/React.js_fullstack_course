// https://jsonplaceholder.typicode.com/users
// zipcode만 추출해서 출력하기
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((users) => {
//         console.log(users.map((user) => user.address.zipcode));
//     });

// https://jsonplaceholder.typicode.com/comments
// 게시글 번호(postId)가 10번인 댓글 전체 출력
// fetch("https://jsonplaceholder.typicode.com/comments")
//     .then((response) => response.json())
//     .then((comments) => {
//         console.log(comments.filter((comment) => comment.postId === 10));
//     });

// 각 결과를 console.log(1) 다음에 출력하게 하기
// 이 때 직접 만든 함수에서 작업한다.

// 예시)
// function test() {
//    console.log(결과)
//    console.log(1)
// }

// 출력 예시)
// 결과
// 1

// const getUsers = (callback) => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then((response) => response.json())
//         .then((users) => {
//             if (callback) {
//                 callback(users);
//             }
//         });
// };

// const getZipcode = (users) => {
//     console.log(users.map((user) => user.address.zipcode));
//     console.log(1);
// };

// getUsers(getZipcode);

const getComments = (callback) => {
    fetch("https://jsonplaceholder.typicode.com/comments")
        .then((response) => response.json())
        .then((comments) => {
            if (callback) {
                callback(comments);
            }
        });
};

const getCommentsByPostIdIs10 = (comments) => {
    console.log(comments.filter((comment) => comment.postId === 10));
    console.log(1);
};

getComments(getCommentsByPostIdIs10);
