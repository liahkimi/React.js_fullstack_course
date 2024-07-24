import React, { useEffect, useState } from 'react';
import { Post } from './models/post';

const PostContainer = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    useEffect(() => {
        const getPost = async ():Promise<Post[]> => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const posts = await response.json();
            return posts;
        }
        getPost().then((posts) => { setPosts(posts)})
    }, [])
    console.log(posts)
    return (
        <div>
            {posts && posts.map((post:Post, i:number) => <li>{post.title}</li>)}
        </div>
    );
};

export default PostContainer;