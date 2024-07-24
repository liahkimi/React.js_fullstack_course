// 문자열
// 문자가 나열되어 있는 형태이다.

// split("구분점")
// 문자열에서 원하는 문자를 구분점으로 생각한다면,
// 그 구분점을 전달해서 각 값을 나누어 Array객체로 만들 때 사용한다.

// let uri = "post/list/1";
// console.log(uri.split("/"));

// const dayOfWeek = "월화수목금토일".split("").map((day) => `${day}요일`);
// console.log(dayOfWeek);

// includes(value)
// 전달한 값이 문자열에 포함되었는지 검사할 때 사용한다.
// console.log("ABC".includes("A"));

// const type = "text/plain base64:d8fn31ks0fn3j10sbvnjkf802nj128fdslda9f1o289";
// const type = "image/png base64:d8fn31ks0fn3j10sbvnjkf802nj128fdslda9f1o289";
// let isImage = type.includes("image");
// console.log(isImage);

// replace(old, new), replaceAll(old, new)
// old를 찾은 뒤 new로 교체하고 싶을 때 사용한다.
// replace()는 중복된 old값이 있어도 첫 번째 값만 교체되고,
// replaceAll()은 old값에 전달한 값을 전체에서 찾은 뒤 모두 교체한다.
// console.log("ABBBBBBBBC".replace("B", "Z"));
// console.log("ABBBBBBBBC".replace(/B/g, "Z"));
// console.log("ABBBBBBBBC".replaceAll("B", "Z"));

// let birth = "2000-12-04";
// const birthData = birth.replaceAll("-", "");
// console.log(birthData);

// indexOf(value), lastIndexOf(value)
// 전달한 값의 위치(인덱스)를 리턴한다.
// const i = "ABCDA".indexOf("A");
// const i = "ABCDA".lastIndexOf("A");
// console.log(i);

// substring(begin, end)
// 원하는 인덱스를 전달해서 해당 부분의 문자열을 추출한다.
// end를 생략하면 끝까지 추출한다.
// console.log("ABCD".substring(0, 2));
// console.log("ABCD".substring(0, 3));

// URL 분석
// /member/my-page/post
const url = "/member/my-page/post";

// 1차
let urlUpdated = url.substring(1);
let end = urlUpdated.indexOf("/");
let appName = urlUpdated.substring(0, end);

console.log(appName);

// 2차
let start = urlUpdated.indexOf("/") + 1;
let serviceName = urlUpdated.substring(start);

console.log(serviceName);
