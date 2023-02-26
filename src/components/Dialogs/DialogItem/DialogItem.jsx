import React from "react";
import { NavLink } from "react-router-dom";
import s from './DialogItem.module.css'

export default function DialogItem(props) {
  const path = '/dialogs/';
  return (
    <div>
      <NavLink to={path + props.id} className={s.contact + ' ' + s.active}>
        {props.name}
      </NavLink>
    </div>
  );
}