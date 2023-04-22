import React from 'react';
import s from '../Music.module.css';

export default function MusicItem(props) {
  return (
    <div>
      <li>
        <img
          src={props.albumCover}
          alt='alt'
          className={s.coverImg}
        />
        <span>{props.artist} - {props.song}</span>
      </li>
    </div>
  );
}
