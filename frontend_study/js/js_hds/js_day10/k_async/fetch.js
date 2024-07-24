// URL: 경로
// URI: URL에서 IP와 포트번호를 제외한 나머지

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((post) => {
        console.log(post.title);
    });
