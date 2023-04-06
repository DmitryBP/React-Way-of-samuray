import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

export default function Profile() {
  return (
    <div className={s.wrapper}>
      <div className={s.mainBaner} />
      <div className={s.content}>
        <div>ava + discrription</div>
        <MyPosts />
      </div>
    </div>
  );
}
