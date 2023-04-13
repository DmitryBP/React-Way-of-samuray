import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let messagesData = [
  {
    message: 'Hi',
  },
  {
    message: 'How are you?',
  },
  {
    message: 'Im fine',
  },
  {
    message: 'And you?',
  },
];

let dialogsData = [
  {
    name: 'Dima',
    id: 1,
  },
  {
    name: 'Tania',
    id: 2,
  },
  {
    name: 'Vika',
    id: 3,
  },
  {
    name: 'Nina',
    id: 4,
  },
  {
    name: 'Vladimir',
    id: 5,
  },
];

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App message={messagesData} dialogs={dialogsData} posts={postsData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
