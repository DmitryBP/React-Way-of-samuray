import React from 'react';
import s from './Post.module.css';

let postsData = [
  {
    img: 'https://ona-znaet.ru/_pu/19/94747440.jpg',
    post: 'это тестовый пост 1',
    like: 'like 3',
  },
  {
    img: 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg',
    post: 'это тестовый пост 2',
    like: 'like 5',
  },
];

let postList = postsData.map((postElement) => {
  return (

  <div>
    <div className={s.item}>
      <img src={postElement.img} alt="betman" />
      <div className={s.text}>{postElement.post}</div>
    </div>

    <span className={s.like}>{postElement.like}</span>
  </div>
  )
});

let postRender = () => {
  return postList;
};

export default function Post() {
  return postRender();
}


