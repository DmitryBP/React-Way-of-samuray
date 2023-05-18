import React from 'react';
import Preloader from '../Preloader/Preloader';
import s from './Profile.module.css';

export default function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={s.mainBaner} />
      <div className={s.content}>
        <img src={props.profile.photos.large} alt="photo1" />
        <div>ava + discrription</div>
      </div>
    </div>
  );
}
