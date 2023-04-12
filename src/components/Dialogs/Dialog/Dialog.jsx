import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialog.module.css';

export default function Dialog(props) {
  return (
  <div>
    <div className={s.dialog}>
      <NavLink to={`dialog-${props.id}`}>{props.name}</NavLink>
    </div>
  </div>)
}
