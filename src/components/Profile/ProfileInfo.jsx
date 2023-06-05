import React from 'react';
import Preloader from '../Preloader/Preloader';
import s from './Profile.module.css';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHoks from './ProfileStatusWithHoks';

export default function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader />;
  } else {
    return (
      <div>
        {/* <div className={s.mainBaner} /> */}
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
            <div>Поиск работы: {props.profile.lookingForAJobDescription}</div>
          </div>
        </div>
        <div className={s.status}>
          <ProfileStatusWithHoks status={props.status} updateStatus={props.updateStatus} />
        </div>
      </div>
    );
  }
}
