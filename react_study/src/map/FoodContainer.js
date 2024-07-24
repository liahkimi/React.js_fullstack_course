import React from 'react';
import Food from './Food';

const FoodContainer = () => {

    const style = {
        listStyle : "none"
    }

    // 이터러블한 객체인 배열 사용
    const foods = [
        {
            id : 1,
            name : '샐러드'
        },
        {
            id : 2,
            name : '떡볶이'
        },
        {
            id : 3,
            name : '치킨'
        },
        {
            id : 4,
            name : '피자'
        }
    ]

    // forEach()
    // array.forEach(callback(currentValue , index , array));
    // 현재 처리 중인 요소의 값, 현재 처리 중인 요소의 인덱스, forEach()를 호출한 배열
    // const foodList = foods.forEach((food, i, foods)=><li>{food.name}, {food.id}</li>) 
    // => forEach는 결과를 반환하지 않아서 변수에 담을 값이 없다.


   
    // 리액트에서는 map을 사용하자!
    // key값 사용 이유 : 버츄얼돔으로부터 화면쪽에 바뀐것이 있는지 상태 검사할 때, 바뀐 컴포넌트의 key값을 알아야 구분이 가능하므로.

    // 😎실습 : li태그를 Food컴포넌트로 변경해보기(실습)
    const foodList = foods.map((food, i, foods) => <Food key={i} style={style} food={food}/>) 
                // 연산이 필요하기에 변수에 담아줌.
                // 컨테이너 내부의 어떤 컴포넌트가 변경된건지 인식하기 위해 key값으로 index 넣어주기
    

    console.log(foodList);
    return (
        <div>
            {foodList}
        </div>
    );
};

export default FoodContainer;