import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

export default function MyPosts(props) {
  let PostList = props.posts.map((post) => {
    return <Post img={post.img} alt={post.alt} post={post.post} like={post.like} />;
  });
  let currentText = React.createRef();
  let addPost = () => {
    props.dispatch({ type: 'ADD-POST' });
  };
  let NewPostText = () => {
    let text = currentText.current.value;
    props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', NewPostText: text });
  };
  return (
    <div className={s.MyPosts}>
      My posts
      <div>
        <textarea
          value={props.statePostText}
          className={s.textArea}
          ref={currentText}
          onChange={NewPostText}
        ></textarea>

        <button onClick={addPost} className={s.btn}>
          Add Post
        </button>
      </div>
      <div>{PostList}</div>
    </div>
  );
}
