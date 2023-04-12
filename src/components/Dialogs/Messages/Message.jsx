import React from 'react';
import s from './Message.module.css';

export default function Message(props) {
  return (
    <div>
      <div className={s.Message}>{props.message}</div>
    </div>
  );
}
