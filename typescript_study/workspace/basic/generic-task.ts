// 제네릭 문법을 이용한 REST API 사용 실습
// https://jsonplaceholder.typicode.com/posts
// 1) fetching 후 전체를 console.log로 출력하기
// 2) fetching 후 (unknown)이 생김

interface Post {
    userId : number;
    id : number;
    title : string;
    body: string;
}

// 10분까지 실습
const getPosts = async <Post>():Promise<Post[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json()  
    return posts;
}
// 함수에서 반환되는 데이터에는 unknown 유형이 지정된다.
// 그렇기에 타입검증이 필요하다.
getPosts<Post>().then((posts)=> posts.map((post => post.title))).catch(console.error)












