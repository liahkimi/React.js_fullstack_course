export type User = {
    name : string;
    age : number;
    address : string;
    hobby : hobby,
    phone : string;
    recommender : recommender;
}

// 타입의 분리
export type hobby = {
    main : string;
    sub : string;
}

export type recommender = {
    name : string;
    age : number;
    address : string;
}[]





