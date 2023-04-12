import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialog.module.css';

let DialogsData = [
  {
    name: 'Dima',
    id: 1,
  },
  {
    name: 'Tania',
    id: 2,
  },
  {
    name: 'Vika',
    id: 3,
  },
  {
    name: 'Nina',
    id: 4,
  },
  {
    name: 'Vladimir',
    id: 5,
  },
];

let DialogList = DialogsData.map((dialogData) => {
  return (
    <div>
      <div className={s.dialog}>
        <NavLink to={`dialog-${dialogData.id}`}>{dialogData.name}</NavLink>
      </div>
    </div>
  );
});

let DialogsRender=()=>{
  return DialogList
}

export default function Dialog() {
  return DialogsRender()
}
