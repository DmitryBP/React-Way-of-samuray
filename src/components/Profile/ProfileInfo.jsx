import React from 'react';
import Preloader from '../Preloader/Preloader';
import s from './Profile.module.css';

export default function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader />;
  } else {
    return (
      <div>
        <div className={s.mainBaner} />
        <div className={s.content}>
          <img
            className={s.profileImg}
            src={
              props.profile.photos.large
                ? props.profile.photos.large
                : 'https://www.super-parrain.com/images/users/2021/03/21/jipem-94cfc61a0a537369748a409a8587df46.png'
            }
            alt="photo1"
          />
          <div className={s.userDiscriptionWrapper}>
            <div>Полное имя: {props.profile.fullName}</div>
            <div>About me: {props.profile.aboutMe}</div>
            {/* <div>Контакты: {props.profile.contacts}</div> */}
            <div>Поиск работы: {props.profile.lookingForAJobDescription}</div>
          </div>
        </div>
      </div>
    );
  }
}

// {aboutMe: 'я круто чувак 1001%', contacts: {…}, lookingForAJob: true, lookingForAJobDescription: 'не ищу, а дурачусь', fullName: 'samurai dimych', …}
// aboutMe
// :
// "я круто чувак 1001%"
// contacts
// :
// {facebook: 'facebook.com', website: null, vk: 'vk.com/dimych', twitter: 'https://twitter.com/@sdf', instagram: 'instagra.com/sds', …}
// fullName
// :
// "samurai dimych"
// lookingForAJob
// :
// true
// lookingForAJobDescription
// :
// "не ищу, а дурачусь"
// photos
// :
// {small: 'https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0', large: 'https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0'}
// userId
// :
// 2
