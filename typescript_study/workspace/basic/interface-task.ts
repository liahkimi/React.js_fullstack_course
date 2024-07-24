// 동물 인터페이스
// Animal 
// 필수 name
// 필수 age 
// 선택 feed

export interface Animal {
    name: string,
    age: number,
    feed ?: number, 
}

// 1. myAnimal 이름과 나이 출력
const myAnimal:Animal = {
    name : "myAnimal", 
    age: 20,
}

console.log(myAnimal.name)
console.log(myAnimal.age)

// 고양이,
// 취미 hobby // '할퀴기'
// 울음 speak // 함수 : '야옹 출력'

interface Cat extends Animal {
    // name: string,
    // age: number,
    // feed ?: number, 
    hobby: string;
    speak: () => string;
}

const myCat:Cat = {
    name : "야옹이",
    age : 5,
    hobby : "할퀴기",
    speak : () => "야옹",
}

// 2. 고양이
// 이름, 나이, 취미, 울음소리 출력
console.log(myCat.name, myCat.age, myCat.hobby, myCat.speak())

// 강아지
// 잠 sleep [대자로 누워 자기]
// 개인기 skill // 함수 : '멍멍 출력'

interface Dog extends Animal {
    // name: string,
    // age: number,
    // feed ?: number, 
    sleep : string[],
    skill : () => string
}

const myDog:Dog = {
    name : '점박이',
    age : 10,
    sleep : ["대자로 누워 자기"],
    skill: () => '멍멍',
}


// 3. 강아지 출력
// 이름, 나이, 잠, 개인기
console.log(myDog.name, myDog.age, myDog.sleep, myDog.skill())

// 4. 고양이와 강아지의 하이브리드 타입생성
type Hybrid = Dog & Cat;

const myHybrid:Hybrid = {
    name : '야멍이',
    age : 10,
    sleep : ["사람처럼 자기"],
    skill: () => '야옹 멍', 
    hobby : "5959",
    speak : () => "밥 줘~!",
}

// 5. 하이브리드 이름, 나이, 취미, 울음소리, 개인기, feed 출력
// 취미 hobby // 5959
// 울음 speak // '야옹 멍'
// 잠자기 sleep // [사람처럼 자기]
// 개인기 skill '밥 줘'

// 실습
console.log(myHybrid.hobby)
console.log(myHybrid.speak())
console.log(myHybrid.sleep)
console.log(myHybrid.skill())














