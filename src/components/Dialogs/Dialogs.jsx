import React from 'react';
import s from './Dialogs.module.css';

export default function Dialogs() {
  return (
    <div className={s.DialogsWrapper}>
      <div className={s.dialogs}>
        <div className={s.dialog}>Vika</div>
        <div className={s.dialog}>Tania</div>
        <div className={s.dialog}>Nina</div>
        <div className={s.dialog}>Vladimir</div>
        <div className={s.dialog}>Dima</div>
      </div>
      <div className={s.Messages}>
        <div className={s.Message}>Hi</div>
        <div className={s.Message}>How are you?</div>
        <div className={s.Message}>Im fine</div>
        <div className={s.Message}>And you?</div>
      </div>
    </div>
  );
}
