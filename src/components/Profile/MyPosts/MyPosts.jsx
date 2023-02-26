import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

export default function MyPosts(props) {
  // let posts = [
  //   {
  //     message:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates provident esse, aperiam unde nulla cumque maiores doloribus libero saepe repellendus est, quam tempore quaerat sunt, qui laboriosam dicta ad ab.',
  //   },
  //   { message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, repellat!' },
  //   {
  //     message:
  //       '!!! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, repellat! !!! Lorem ipsum dolor sit, amet consectetur',
  //   },
  // ];
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
