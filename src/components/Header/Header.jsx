import React from 'react';
import { Navigate } from 'react-router-dom';
import s from './Header.module.css';

export default function Header(props) {
  const logOut2 = () => {
    props.logOut()
    return <Navigate to={'/music'} />
  }

  return (
    <header className={s.header}>
      <div className={s.logo}>
        <img
          src="https://yoomark.com/sites/default/files/field/image/react-technologies-9ce31d51432424bcd4626f5f730580f3cddc9c211c1577e9950138550233542a_0.png"
          alt="logo"
        />
        <div>REACT REDUKS CURS</div>
      </div>
      <div className={s.login}>
        {props.login ? (
          <span className={s.loginWrapper}>
            {props.login} <button className={s.exitBtn} onClick={logOut2} />
          </span>
        ) : (
          <span>Sign in</span>
        )}
      </div>
    </header>
  );
}
