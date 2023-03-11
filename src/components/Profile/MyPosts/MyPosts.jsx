import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

export default function MyPosts(props) {

  let postsElements = props.posts.map(post => <Post message={post.message} />)
  
  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text)
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea ref={newPostElement}></textarea>
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div>
        {postsElements}
      </div>
    </div>
  );
}
