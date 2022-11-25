import React from 'react';
import './Post.css'
import 'animate.css'

const Post = ({title, description}) => {
    let today = new Date().toLocaleDateString();
    return (
        <div className="bodyPost">
            <div className="left">
                <div className="animate__animated animate__fadeIn">{today}</div>
                <div className="animate__animated animate__fadeIn animate__delay-1s">{title}</div>
            </div>
            <div className="right">
                <div className="animate__animated animate__fadeInLeft animate__delay-2s">{description}</div>
            </div>
        </div>
    );
};

export default Post;