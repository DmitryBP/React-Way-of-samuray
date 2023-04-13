import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

export default function MyPosts(props) {
  let PostList = props.posts.map((post) => {
    return <Post img={post.img} alt={post.alt} post={post.posts} like={post.like} />;
  });

  return (
    <div className={s.MyPosts}>
      My posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <div>{PostList}</div>
    </div>
  );
}
