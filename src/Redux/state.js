import { renderEntireTree } from '../render';
import { img } from './img/img';

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

  musicPage: {
    playList: [
      {
        albumCover:
          'https://i.pinimg.com/236x/e3/11/97/e31197163a6b720d88eb0d5f67e082d2--rihanna-makeup-dip-dyed.jpg',
        artist: 'Riana',
        song: 'Rain',
      },
      {
        albumCover:
          'https://mediamall.am/timthumb.php?src=upload/52210.png&w=300&h=300&mt=1505519127',
        artist: 'Ledy Gaga',
        song: 'Blue sky',
      },
      {
        albumCover: 'https://sun9-25.userapi.com/c858120/v858120997/219a7e/pbutD6e6I2U.jpg?ava=1',
        artist: 'Elton Djon',
        song: 'Your life',
      },
    ],
  },

  newsPage: {
    newsList: [
      {
        newTitle: 'Вышел новый трейлер «Форсажа 10» с Вином Дизелем и Джейсоном Момоа',
        newDiskription:
          'В Сети появился свежий трейлер десятой части фильма «Форсаж» с Вином Дизелем и Джейсоном Момоа в главных ролях.',
        newImg: img.news1,
        newSourse: {
          sorseImg:
            'https://avatars.dzeninfra.ru/get-ynews-logo/117671/1027-1530099491421-square/logo-square',
          sorsTitle: 'РБК',
          sorseTime: '12:45',
        },
      },
      {
        newTitle:
          'Осудивший спецоперацию Александр Ревва стал втрое больше зарабатывать на россиянах',
        newDiskription:
          '"Карьера Александра Реввы в России окончена": такими заголовками СМИ запестрели пару недель назад, когда гастроли комика и по совместительству певца отменили сначала в Краснодаре...',
        newImg: img.reva,
        newSourse: {
          sorseImg:
            'https://avatars.dzeninfra.ru/get-ynews-logo/117671/1027-1530099491421-square/logo-square',
          sorsTitle: 'РБК',
          sorseTime: '12:45',
        },
      },
      {
        newTitle: 'Греки раскритиковали Netflix за выбор темнокожей актрисы на роль Клеопатры',
        newDiskription:
          'В Сети появился свежий трейлер десятой части фильма «Форсаж» с Вином Дизелем и Джейсоном Момоа в главных ролях.',
        newImg: img.kleo,
        newSourse: {
          sorseImg:
            'https://avatars.dzeninfra.ru/get-ynews-logo/117671/1027-1530099491421-square/logo-square',
          sorsTitle: 'РБК',
          sorseTime: '12:45',
        },
      },
      {
        newTitle: 'Телеканал «Муз-ТВ» убрал Елену Темникову из фильма про «Фабрику звезд»',
        newDiskription:
          'Елена Темникова заняла третье место во втором сезоне «Фабрики звезд» в 2003 году, уступив лишь Полине Гагариной и Елене Терлеевой.',
        newImg: img.temnik,
        newSourse: {
          sorseImg:
            'https://avatars.dzeninfra.ru/get-ynews-logo/117671/1027-1530099491421-square/logo-square',
          sorsTitle: 'РБК',
          sorseTime: '12:45',
        },
      },
    ],
    commentText: '',
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

export let newsOnChengeFn = (text) => {
  state.newsPage.commentText = text;
  renderEntireTree(state);
};

export let addComment = () => {
  let newComment =  {
    newTitle: 'Вышел новый трейлер «Форсажа 10» с Вином Дизелем и Джейсоном Момоа',
    newDiskription:
    state.newsPage.commentText,
    newImg: img.news1,
    newSourse: {
      sorseImg:
        'https://avatars.dzeninfra.ru/get-ynews-logo/117671/1027-1530099491421-square/logo-square',
      sorsTitle: 'РБК',
      sorseTime: '12:45',
    }
  }
  state.newsPage.newsList.push(newComment);
  renderEntireTree(state);
};
