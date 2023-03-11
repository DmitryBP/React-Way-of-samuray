import React from "react";
import { NavLink } from "react-router-dom";
import s from './DialogItem.module.css'

export default function DialogItem(props) {
  const path = '/dialogs/';
  return (
    <div>
      <NavLink to={path + props.id} className={s.contact + ' ' + s.active}>
        <img src={props.ava} alt='BredPit' />
        <p className={s.name}>{props.name}</p>
      </NavLink>
    </div>
  );
}