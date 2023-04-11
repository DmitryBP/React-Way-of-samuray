import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

export default function Dialogs() {
  return (
    <div className={s.DialogsWrapper}>
      <div className={s.dialogs}>
        <div className={s.dialog}>
          <NavLink to="dialog-1">Vika</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="dialog-2">Tania</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="dialog-3">Nina</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="dialog-4">Vladimir</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="dialog-5">Dima</NavLink>
        </div>
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
