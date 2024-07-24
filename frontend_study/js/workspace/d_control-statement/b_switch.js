// color에는 한국말로 색상이 들어간다.
// result에는 color에 들어간 색상을 영어로 넣는다.
// color의 종류는 검은색, 빨간색, 흰색, 노란색이다.
let color = "검은색";
let result = null;

// if (color === "검은색") {
//     result = "black";
// } else if (color === "빨간색") {
//     result = "red";
// } else if (color === "흰색") {
//     result = "white";
// } else if (color === "노란색") {
//     result = "yellow";
// } else {
//     result = "다시 입력하세요.";
// }

switch (color) {
    case "검은색":
        result = "black";
        break;
    case "빨간색":
        result = "red";
        break;
    case "흰색":
        result = "white";
        break;
    case "노란색":
        result = "yellow";
        break;

    default:
        result = "다시 입력하세요.";
        break;
}

console.log(result);
