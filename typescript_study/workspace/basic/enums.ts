// enum이란?
// 상수를 모아놓은 형태이며, 값에 의미를 부여함으로서 오타를 방지하기 위해 사용한다.
// 기본적으로 인덱스는 0으로 시작해서 1씩 증가한다.

enum BasicDirection {
    UP, // 0
    DOWN, // 1
    LEFT, // 2
    RIGHT // 3
}

// console.log(BasicDirection.UP)
// 첫 번째 인덱스만 설정해도 다음 인덱스는 자동으로 이전 인덱스의 +1로 설정된다.
enum ImplicitDirection {
    UP = 8,
    DOWN,
    LEFT,
    RIGHT
}
console.log(ImplicitDirection.LEFT)

enum StringDirection {
    UP = "UP",
    DOWN = "DOWN",
    LEFT = "LEFT",
    RIGHT = "RIGHT"
}

console.log(StringDirection.DOWN)

const myStringEnumVar:StringDirection = StringDirection["UP"]
const myEnumfunc = (direction:StringDirection) => {
    console.log(`We ar going ${direction}`)
}

myEnumfunc(StringDirection.UP)
