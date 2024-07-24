// https://jsonplaceholder.typicode.com/users
// zipcode만 추출해서 출력하기
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((users) => {
//         console.log(users.map((user) => user.address.zipcode));
//     });
//(10) ['92998-3874', '90566-7771', '59590-4157', '53919-4257', '33263', '23505-1337', '58804-1099', '45169', '76495-3109', '31428-2261']
//배열 형태로 출력되어야 활용하기 좋다.(map은 callback함수의 return값으로 변형된 array형태로 반환한다.)

//내 풀이 :
// .then((users) => {
//     users.forEach((users) => {
//         console.log(users.address.zipcode);
//     });
// }); //같은 zipcode만 추출되지만, string의 반복출력만 일어난다.

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

const getUsers = (callback) => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((users) => {
            if (callback) {
                callback(users);
            }
        });
};

const getZipcode = (users) => {
    console.log(users.map((user) => user.address.zipcode));
    console.log(1);
};

getUsers(getZipcode);

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
