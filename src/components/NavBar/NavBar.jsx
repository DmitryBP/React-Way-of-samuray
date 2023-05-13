import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css';

export default function NavBar() {
  const aStyle = ({ isActive }) => (isActive ? s.active : '');
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li>
          <NavLink to="/profile" className={aStyle}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/dialogs" className={aStyle}>
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" className={aStyle}>
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to="/music" className={aStyle}>
            Music
          </NavLink>
        </li>
        <li>
          <NavLink to="news" className={aStyle}>
            News
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" className={aStyle}>
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
