import React from 'react';
import s from './Preloader.module.css'

export default function Preloader(props) {

  return props.isFetching ? (
    <div>
      <img className={s.preloader}
        src="https://luxe-host.ru/wp-content/uploads/b/4/9/b49112a201d5f7bf04fcf051337f725f.gif"
        alt="Preloader"
      />
    </div>
  ) : null;
}
