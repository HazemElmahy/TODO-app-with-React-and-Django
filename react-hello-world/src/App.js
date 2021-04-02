import React, { Component } from 'react';
import axios from 'axios';

import Post from './components/Post';
import './style/App.css';


const apiUrl = "http://localhost:8000/api/posts/"


class Todo extends Component {
  state = {
    posts: [],
    postBody: ""
  }

  postDataHandler = () => {
    const data = {
      body: this.state.postBody
    }
    axios.post(apiUrl, data)
    .then(res => {
      console.log(res)
    });
  }

  postBodyHandler = (event) => {
    this.setState({
      postBody: event.target.value
    })
  }

  deletePostHandler = () => {
    axios.delete(apiUrl+"5")
  }

  componentDidMount () {
    axios.get(apiUrl)
    .then(res => {
      this.setState({posts: res.data})
    })
  }

  render() {
    const posts = this.state.posts.map(post => {
      return <Post id={post.id} body={post.body} delete={this.deletePostHandler}/>
    });

    return (
      <div className="App">
        <h1>TODO</h1>
        <form>
          <div className="post__form">
            <input value={this.state.postBody} onChange={this.postBodyHandler} placeholder="Enter something" type="text"></input>
            <button onClick={this.postDataHandler}>Post</button>
          </div>
        </form>
        <div className="posts">
          {posts}
        </div>
      </div>
    );
  }

}

export default Todo;
