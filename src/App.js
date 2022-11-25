import './App.css'
import React, {useState} from "react";
import PostList from "./PostList";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: "Morning", description: "I do..."},
        {id: 2, title: "Evening", description: "I think..."},
        {id: 3, title: "Night", description: "I sleep..."}
    ])

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('');


    function addNewPost(e) {
        e.preventDefault()
        const newPost = {
            id: Date.now(),
            title,
            description
        }

        setPosts([...posts, newPost])
    }

  return (
      <div className="App">
        <h1>My ToDo List! ^_^...</h1>
          <PostList posts={posts}></PostList>

          <form>
              <input value={title} onChange={event => setTitle(event.target.value)} type="text" placeholder="Заголовок"/>
              <textarea value={description} onChange={event => setDescription(event.target.value)} type="text" placeholder="Что вы делали"/>
              <button onClick={addNewPost}>Create Post</button>
          </form>
      </div>
  );
}

export default App;
