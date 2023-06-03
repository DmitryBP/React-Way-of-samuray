import React from 'react';
import s from '../Music.module.css';
import MusicTag from './MusicTag';

export default function MusicItem(props) {
  return (
    <div>
      <li>
        <div className={s.treckWrapperLeft}>
          <img src={props.albumCover} alt="alt" className={s.coverImg} />
          <span className={s.treckTitle}>
            {props.artist} - {props.song}
          </span>
        </div>
        <MusicTag tag={props.tag} upDateTag={props.upDateTag} />
      </li>
    </div>
  );
}
