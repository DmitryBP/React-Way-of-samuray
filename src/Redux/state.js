import { renderEntireTree } from '../render';

export let state = {
  postPage: {
    posts: [
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
    ],
    newPostText: '',
  },

  dialogPage: {
    dialogs: [
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
    ],

    messages: [
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
    ],
    newMessageText: '',
  },
};

window.state = state;

export let addMessage = () => {
  let newMessageObj = {
    message: state.dialogPage.newMessageText,
  };
  state.dialogPage.messages.push(newMessageObj);
  state.dialogPage.newMessageText = '';
  renderEntireTree(state);
};

export let cheingeMessageText = (cheingedText) => {
  state.dialogPage.newMessageText = cheingedText;
  renderEntireTree(state);
};

export let newPostText = (newPostTextValue) => {
  state.postPage.newPostText = newPostTextValue;
  renderEntireTree(state);
};

export let addPost = (newPostText) => {
  let newPost = {
    img: 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg',
    alt: 'img2',
    post: state.postPage.newPostText,
    like: 'like 6',
  };
  state.postPage.posts.push(newPost);
  state.postPage.newPostText = '';
  renderEntireTree(state);
};
