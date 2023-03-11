import React from 'react';
import MyPost from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

export default function Profile(props) {
  return (
    <div className={s.Profile}>
      <ProfileInfo />
      <MyPost
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        alert1={props.alert1}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
}
