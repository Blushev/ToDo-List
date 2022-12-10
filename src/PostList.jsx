import React from 'react';
import Post from "./Post";

const PostList = ({posts, deleteFun}) => {
    return (
        <div>
            {posts.map((post, index)=> <Post remove={deleteFun} number={index+1} post={post} key={post.id}/>)}
        </div>
    );
};

export default PostList;
