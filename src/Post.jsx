import React from 'react';
import './Post.css'
import 'animate.css'

const Post = (props) => {
    let today = new Date().toLocaleDateString();
    return (
        <div className="bodyPost">
            <div className="left">
                <div className="animate__animated animate__fadeIn">{today}</div>
                <div className="animate__animated animate__fadeIn animate__delay-1s">{props.title}</div>
            </div>
            <div className="right">
                <div className="animate__animated animate__fadeInLeft animate__delay-2s">{props.description}</div>
            </div>
            <button onClick={()=> props.remove(props.post)}>Delete</button>
        </div>
    );
};

export default Post;
