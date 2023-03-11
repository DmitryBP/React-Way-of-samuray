import { renderEntireTree } from "../render";

// eslint-disable-next-line no-unused-vars
export let state = {
  profilePage: {
    posts: [
      {
        message:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates provident esse, aperiam unde nulla cumque maiores doloribus libero saepe repellendus est, quam tempore quaerat sunt, qui laboriosam dicta ad ab.',
      },
      { message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, repellat!' },
      {
        message:
          '!!! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, repellat! !!! Lorem ipsum dolor sit, amet consectetur',
      },
    ],
    newPostText: "it-camasutra"
  },
  dialogsPage: {
    dialogs: [
      {
        id: 1,
        name: 'Dima',
        ava: 'https://placepic.ru/wp-content/uploads/2021/02/kinopoisk_ru_Brad_Pi-41.jpg',
      },
      {
        id: 2,
        name: 'Vika',
        ava: 'https://kartinkived.ru/wp-content/uploads/2022/01/avatarka-dlya-devushek.jpg',
      },
      {
        id: 3,
        name: 'Tania',
        ava: 'https://kartinkin.net/uploads/posts/2022-03/1648033996_25-kartinkin-net-p-multyashnie-kartinki-na-avatarku-26.jpg',
      },
      {
        id: 4,
        name: 'Nina',
        ava: 'https://krot.info/uploads/posts/2022-01/thumbs/1642554413_8-krot-info-p-franshiza-art-26.jpg',
      },
      {
        id: 5,
        name: 'Vova',
        ava: 'https://pixelbox.ru/wp-content/uploads/2022/05/russia-avatar-pixelbox.ru-14.jpg',
      },
      {
        id: 6,
        name: 'Denis',
        ava: 'https://vraki.net/sites/default/files/inline/images/17_142.jpg',
      },
    ],
    messages: [
      { id: 1, message: 'Hi', speacker: 'left' },
      { id: 1, message: 'Hi', speacker: 'Right' },
      { id: 2, message: 'Haw are your', speacker: 'left' },
      { id: 1, message: 'im fine', speacker: 'Right' },
      { id: 3, message: 'Do your love me', speacker: 'left' },
      { id: 4, message: 'yas', speacker: 'Right' },
    ],
  },
  alert1: () => alert('dtdt'),
};

export let addPost = () => {
  let newPost = {
    message: state.profilePage.newPostText,
  };

  state.profilePage.posts.push(newPost)
  state.profilePage.newPostText = ''
  renderEntireTree(state)
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText
  renderEntireTree(state);
}
