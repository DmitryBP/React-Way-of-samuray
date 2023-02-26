import React from 'react';
import s from './ProfileInfo.module.css';

export default function ProfileInfo() {
  return (
    <div>
      <img
        className={s.plyg}
        alt="alt"
        src="https://www.voucherwonderland.com/reisemagazin/wp-content/uploads/2018/05/Issos-Beach-1.jpeg"
      ></img>

      <div className={s.descriptionBlock}>
        <div className={s.user}>
          <img
            className={s.ava}
            alt="alt"
            src="https://abrakadabra.fun/uploads/posts/2022-03/thumbs/1647943494_1-abrakadabra-fun-p-gomer-avatarka-1.jpg"
          ></img>
          <div className={s.descripttion}>It's my web app</div>
        </div>
      </div>
    </div>
  );
}
