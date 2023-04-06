import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css'

export default function MyPosts() {
  return (
    <div className={s.MyPosts}>
      My posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <div>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
