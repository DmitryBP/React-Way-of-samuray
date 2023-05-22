import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

export default function MyPosts(props) {
  let PostList = props.posts.map((post) => {
    return <Post img={post.img} alt={post.alt} post={post.post} like={post.like} id={post.id} key={post.id}/>;
  });

  let currentText = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let NewPostText = () => {
    let text = currentText.current.value;
    props.onNewPostText(text);
  };

  return (
    <div className={s.MyPosts}>
      My posts
      <div>
        <textarea
          value={props.newPostText}
          className={s.textArea}
          ref={currentText}
          onChange={NewPostText}
        ></textarea>

        <button onClick={onAddPost} className={s.btn}>
          Add Post
        </button>
      </div>
      <div className={s.postsWrapper}>{PostList}</div>
    </div>
  );
}
