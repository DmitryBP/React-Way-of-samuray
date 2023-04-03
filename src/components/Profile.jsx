import React from 'react';
import s from './ProFile.module.css'

export default function Profile() {
  return (
    <div className={s.content}>
      <div className={s.mainBaner} />
      <div>ava + discrription</div>
      <div>
        My posts
        <div>New post</div>
        <div>
          <div>Post1</div>
          <div>Post2</div>
          <div>Post3</div>
        </div>
      </div>
    </div>
  );
}
