"use strict";
// 함축형 문법(implicit type assertion);
const implicitObject = {
    attr1: 4,
    attr2: 5,
    attr3: "some attr value",
    someFunction() {
        console.log(this.attr1);
    },
    someArrowFunction: () => {
        return 1 + 234;
    }
};
implicitObject.someArrowFunction();
implicitObject.someFunction();
// implicitObject.attr1 = "10";
// 설명형 문법(explicit type annotation);
const explicitObject = {
    attr1: 123.456,
    attr2: "some value",
    someArrowFunc: () => {
        return 10 < 10;
    }
};
// 프로퍼티의 key, value 타입이 항상 동일하면 아래 문법으로 사용한다.
const indexSigObject = {
    attr1: "attrValue1",
    attr2: "attrValue2",
    attr3: "attrValue3",
    attr4: "attrValue4",
};
const limitedSigObject = {
    a: 2345,
    b: 2345,
    c: 2345,
};
