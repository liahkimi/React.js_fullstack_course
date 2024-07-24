"use strict";
// 함축형 문법(implicit type assertion)
// function implicitReturnFunc(){
//     return 1234;
// }
// const implicitReturnArrowFunc = () => {
//     return 1 + 1;
// }
// let implicitFuncValue = implicitReturnFunc(); // number
// implicitFuncValue = "string";
// 설명형 문법(explicit type annotation)
// function explicitReturnFunc():boolean {
//     return false;
// }
// const explicitArrowFunc = ():string => {
//     return "string value";
// }
// let explicitFuncValue = explicitReturnFunc();
// console.log(explicitFuncValue)
// function funcWithParams(x:number, y:number, z:number):number{
//     return x + y + z;
// }
// const funcWithParams2 = (x:number, y:number, z:number):string => {
//     return (x + y + z).toString()
// }
// console.log(funcWithParams(1, 2, 3), typeof(funcWithParams(1, 2, 3)))
// console.log(funcWithParams2(1, 2, 3), typeof(funcWithParams2(1, 2, 3)))
// Optional Parameter
//     const funcWithOptional = (x:number, y?:number, z?:number) => {
//         if(y == undefined){
//             return x;
//         }
//         if(z == undefined){
//             return x + y;
//         }
//         return x + y * z;
//     }
// console.log("Optional Parameter")
// console.log(funcWithOptional(1))
// console.log(funcWithOptional(1, 2))
// console.log(funcWithOptional(1, 2, 3))
// Rest Parameter
// 기본 매개변수 값들 외의 Rest Parameter는 ??? 저장된다.
const funcWithParams3 = (...numbers) => {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
};
console.log(funcWithParams3(7, 9, 0, 10, 22, 10, 15));
