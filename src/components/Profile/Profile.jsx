import React from 'react';
import MyPost from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

export default function Profile() {
  let posts = [
    {
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates provident esse, aperiam unde nulla cumque maiores doloribus libero saepe repellendus est, quam tempore quaerat sunt, qui laboriosam dicta ad ab.',
    },
    { message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, repellat!' },
    {
      message:
        '!!! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, repellat! !!! Lorem ipsum dolor sit, amet consectetur',
    },
  ];

  return (
    <div className={s.Profile}>
      <ProfileInfo />
      <MyPost posts = {posts}/>
    </div>
  );
}
