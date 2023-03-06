import React from 'react';
import MyPost from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

export default function Profile(props) {


  return (
    <div className={s.Profile}>
      <ProfileInfo />
      <MyPost posts = {props.state.posts}/>
    </div>
  );
}
