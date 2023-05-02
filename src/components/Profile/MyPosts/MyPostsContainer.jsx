import React from 'react';
import {
  addPostactionCriater,
  upDateNewPostTextactionCriater,
} from '../../../Redux/Profile-reducer';
import MyPosts from './MyPosts';

export default function MyPostsContainer(props) {
  let state = props.store.getState();
  let addPost = () => {
    props.store.dispatch(addPostactionCriater());
  };

  let onNewPostText = (text) => {
    let action = upDateNewPostTextactionCriater(text);
    props.store.dispatch(action);
  };
  console.log(state);
  return (
    <MyPosts
      upDateNewPostText={onNewPostText}
      addPost={addPost}
      posts={state.postPage.posts}
      newPostText={state.postPage.newPostText}
    />
  );
}
