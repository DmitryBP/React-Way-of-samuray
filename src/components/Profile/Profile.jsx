import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'

export default function Profile() {
  return (
    <div className={s.content}>
      <div className={s.mainBaner} />
      <div>ava + discrription</div>
      <MyPosts/>
    </div>
  );
}
