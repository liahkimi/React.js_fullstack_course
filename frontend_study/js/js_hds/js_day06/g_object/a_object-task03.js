// 게시글
// 번호, 제목, 내용
let post = {
    number: 3,
    title: "테스트 제목3",
    content: "테스트 내용3",
};

// 후기
// 번호, 내용, 별점(0~5)
let reply = {
    number: 2,
    content: "테스트 댓글2",
    star: 4,
    post: post,
};

console.log(reply.post.title);
