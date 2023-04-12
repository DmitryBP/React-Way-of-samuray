import React from 'react';
import s from './Post.module.css';

export default function Post(props) {
  return (
    <div>
      <div className={s.item}>
        <img src={props.img} alt={props.alt} />
        <div className={s.text}>{props.post}</div>
      </div>

      <span className={s.like}>{props.like}</span>
    </div>
  );
}
