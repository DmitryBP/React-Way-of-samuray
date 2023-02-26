import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
export default function Navbar() {
  return (
    <nav className={classes.nav}>
      <div>
        <NavLink to="/profile" className={(navData) => (navData.isActive ? s.active : s.item)}>
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" className={(navData) => (navData.isActive ? s.active : s.item)}>Messages</NavLink>
      </div>
      <div>
        <NavLink to="/news" className={(navData) => (navData.isActive ? s.active : s.item)}>News</NavLink>
      </div>
      <div>
        <NavLink to="/musick" className={(navData) => (navData.isActive ? s.active : s.item)}>Musick</NavLink>
      </div>
      <div>
        <NavLink to="/settings" className={(navData) => (navData.isActive ? s.active : s.item)}>Settings</NavLink>
      </div>
    </nav>
  );
}
