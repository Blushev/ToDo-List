import React from 'react';
import Post from "./Post";

const PostList = ({posts}) => {
    return (
        <div>
            {posts.map((post, index)=> <Post title={post.title} description={post.description} key={post.id}/>)}
        </div>
    );
};

export default PostList;