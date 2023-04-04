import React from 'react';
import Post from './Post/Post';

export default function MyPosts() {
  return (
    <div>
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
