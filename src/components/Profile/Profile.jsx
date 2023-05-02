import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';

export default function Profile(props) {
  return (
    <div>
      <div className={s.mainBaner} />
      <div className={s.content}>
        <div>ava + discrription</div>
        <MyPostsContainer 
          store = {props.store}
        />
      </div>
    </div>
  );
}
