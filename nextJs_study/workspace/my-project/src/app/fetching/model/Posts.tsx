export interface User {
    id : string;
    nickname : string;
} 

export interface Post {
    postId : number;
    user : User;
    content : string;
    createAt : Date;
    Images : string;
}