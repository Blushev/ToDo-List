import React, {useState} from 'react';

const MyForm = ({create}) => {
    const [post, setPost] = useState({title: '', description: ''})


    function addNewPost(e) {
        e.preventDefault()
        const newPost = {...post, id: Date.now()}
        create(newPost)
        setPost({title: '', description: ''})
    }


    return (
            <form>
                <input value={post.title} onChange={event => setPost({...post, title: event.target.value})} type="text" placeholder="Заголовок"/>
                <textarea value={post.description} onChange={event => setPost({...post, description: event.target.value})} type="text" placeholder="Что вы делали"/>
                <button onClick={addNewPost}>Create Post</button>
            </form>
    );
};

export default MyForm;
