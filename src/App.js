import './App.css'
import React, {useState} from "react";
import PostList from "./PostList";
import MyForm from "./MyForm";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: "Morning", description: "I do..."},
        {id: 2, title: "Evening", description: "I think..."},
        {id: 3, title: "Night", description: "I sleep..."}
    ])

    function createCallBack(newPost){
        setPosts([...posts, newPost])
    }

    function deleteCallBack(post){
        setPosts(posts.filter(p => p.id !== post.id))
    }

  return (
      <div className="App">
        <h1>My ToDo List! ^_^...</h1>
          <PostList posts={posts} deleteFun={deleteCallBack}></PostList>
          <MyForm create={createCallBack}></MyForm>
      </div>
  );
}

export default App;
