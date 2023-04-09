import React from 'react'
import s from './NavBar.module.css'

export default function NavBar() {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li>
          <a href="/profile">Profile</a>
        </li>
        <li>
          <a href="/dialogs">Messages</a>
        </li>
        <li>
          <a href="/music">Music</a>
        </li>
        <li>
          <a href="news">News</a>
        </li>
        <li>
          <a href="/settings">Settings</a>
        </li>
      </ul>
      </nav>
  )
}
