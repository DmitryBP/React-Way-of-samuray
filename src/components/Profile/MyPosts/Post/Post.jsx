import React from 'react';
import s from './Post.module.css';

export default function Post() {
  return (
    <div className={s.item}>
      <img
        src="https://avatars.mds.yandex.net/i?id=1e3fa86d6d8f622901e39acdd0c34b49a4bcc046-9107119-images-thumbs&n=13"
        alt="betman"
      />
      Post1
      <div>
        <span>like</span>
      </div>
    </div>
  );
}
