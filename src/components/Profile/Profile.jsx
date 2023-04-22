import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

export default function Profile(props) {
  return (
    <div>
      <div className={s.mainBaner} />
      <div className={s.content}>
        <div>ava + discrription</div>
        <MyPosts
          posts={props.postPage.posts}
          statePostText={props.statePostText}
          dispatch={props.dispatch}
          NewPostText={props.NewPostText}
        />
      </div>
    </div>
  );
}
