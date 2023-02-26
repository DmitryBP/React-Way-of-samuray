import React from 'react';
import s from './Post.module.css';

export default function Post(props) {
  return (
    <div className={s.Post}>
      <img
        className={s.ava}
        alt="alt"
        src="https://media.istockphoto.com/id/1143511824/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BC%D1%83%D0%B6%D1%81%D0%BA%D0%BE%D0%B9-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%B0-%D0%B8%D0%BB%D0%B8-%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B9-%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%BB%D0%B8%D1%86%D0%BE-%D1%81-%D0%B1%D0%BE%D1%80%D0%BE%D0%B4%D0%BE%D0%B9-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F.jpg?s=612x612&w=is&k=20&c=gEQbHVaT-l2CvybugKPyfuzJ8ymXvqYIXJBqagkBeEE="
      ></img>
      <div>
        {props.message}
      </div>

    </div>
  );
}
