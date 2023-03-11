import React from 'react';
import s from './Message.module.css';

export default function Message(props) {
  return (
    <div>
      <div className={s.messag + ' ' + (props.speacker === 'left' ? s.messagL : s.messagR)}>
        {props.messag}
      </div>
    </div>
  );
}
