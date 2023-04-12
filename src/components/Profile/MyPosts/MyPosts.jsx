import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

let postsData = [
  {
    img: 'https://ona-znaet.ru/_pu/19/94747440.jpg',
    alt: 'img1',
    post: 'это тестовый пост 1',
    like: 'like 3',
  },
  {
    img: 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg',
    alt: 'img2',
    post: 'это тестовый пост 2',
    like: 'like 5',
  },
];

let PostList = postsData.map((post) => {
  return (
    <Post
      img={post.img}
      alt={post.alt}
      post={post.post}
      like={post.like}
    />
  );
});

export default function MyPosts() {
  return (
    <div className={s.MyPosts}>
      My posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <div>
        {PostList}
      </div>
    </div>
  );
}
