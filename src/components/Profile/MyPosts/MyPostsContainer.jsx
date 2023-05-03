import React from 'react';
import {
  addPostactionCriater,
  upDateNewPostTextactionCriater,
} from '../../../Redux/Profile-reducer';
import StoreContext from '../../../storeContext';
import MyPosts from './MyPosts';

export default function MyPostsContainer() {
  return (
    <StoreContext.Consumer>
      {(store) => {
        console.log(store)
        const state = store.getState();
        const addPost = () => {
          store.dispatch(addPostactionCriater());
        };
        const onNewPostText = (text) => {
          const action = upDateNewPostTextactionCriater(text);
          store.dispatch(action);
        };
        return (
          <MyPosts
            upDateNewPostText={onNewPostText}
            addPost={addPost}
            posts={state.postPage.posts}
            newPostText={state.postPage.NewPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
}
