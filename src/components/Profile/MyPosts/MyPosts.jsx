import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

export default function MyPosts(props) {
  
  let postsElements = props.posts.map(post => <Post message={post.message} />)
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
      <div>
        {postsElements}
      </div>
    </div>
  );
}
