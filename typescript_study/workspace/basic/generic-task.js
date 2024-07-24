"use strict";
// 제네릭 문법을 이용한 REST API 사용 실습
// https://jsonplaceholder.typicode.com/posts
// 1) fetching 후 전체를 console.log로 출력하기
// 2) fetching 후 (unknown)이 생김
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// 10분까지 실습
const getPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = yield response.json();
    return posts;
});
// 함수에서 반환되는 데이터에는 unknown 유형이 지정된다.
// 그렇기에 타입검증이 필요하다.
getPosts().then((posts) => posts.map((post => post.title))).catch(console.error);
