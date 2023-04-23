import { img } from './img/img';

const ADD_POST = 'ADD-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const ADD_MUSIC = 'ADD-MUSIC';
const ADD_COMMENT = 'ADD-COMMENT';
const UP_DAATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const UPDATE_NEW_NEWS_TEXT = 'UPDATE-NEW-NEWS-TEXT';
const UPDATE_NEW_MUSIC_TEXT = 'UPDATE_NEW_MUSIC_TEXT';

let store = {
  _state: {
    postPage: {
      posts: [
        {
          img: 'https://sun1-54.userapi.com/s/v1/if1/0h_JqumO9DvcvBnpIXKnb15tL1Ul9KUA4EIRpUCeWVaS3nxfTSppU7Prfq5xJUSJNDvOzb9X.jpg?size=200x200&quality=96&crop=139,0,437,437&ava=1',
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
      NewPostText: '',
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
      newArtistText: '',
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
  },

  _collSubsriber() {},

  getState() {
    return this._state;
  },

  subscrib(observer) {
    this._collSubsriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        img: 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg',
        alt: 'img2',
        post: this._state.postPage.NewPostText,
        like: 'like 6',
      };
      this._state.postPage.posts.push(newPost);
      this._state.postPage.NewPostText = '';
      this._collSubsriber(this._state);
    } else if (action.type === ADD_MESSAGE) {
      let newMessageObj = {
        message: this._state.dialogPage.newMessageText,
      };
      this._state.dialogPage.messages.push(newMessageObj);
      this._state.dialogPage.newMessageText = '';
      this._collSubsriber(this._state);
    } else if (action.type === ADD_MUSIC) {
      let musicObj = {
        albumCover:
          'https://i.pinimg.com/236x/e3/11/97/e31197163a6b720d88eb0d5f67e082d2--rihanna-makeup-dip-dyed.jpg',
        artist: this._state.musicPage.newArtistText,
        song: 'Rain',
      };
      this._state.musicPage.playList.push(musicObj);
      this._collSubsriber(this._state);
    } else if (action.type === ADD_COMMENT) {
      let newComment = {
        newTitle: 'Вышел новый трейлер «Форсажа 10» с Вином Дизелем и Джейсоном Момоа',
        newDiskription: this._state.newsPage.commentText,
        newImg: img.news1,
        newSourse: {
          sorseImg:
            'https://avatars.dzeninfra.ru/get-ynews-logo/117671/1027-1530099491421-square/logo-square',
          sorsTitle: 'РБК',
          sorseTime: '12:45',
        },
      };
      this._state.newsPage.newsList.push(newComment);
      this._collSubsriber(this._state);
    } else if (action.type === UP_DAATE_NEW_POST_TEXT) {
      this._state.postPage.NewPostText = action.NewPostText;
      this._collSubsriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogPage.newMessageText = action.cheingedText;
      this._collSubsriber(this._state);
    } else if (action.type === UPDATE_NEW_NEWS_TEXT) {
      this._state.newsPage.commentText = action.text;
      this._collSubsriber(this._state);
    } else if (action.type === UPDATE_NEW_MUSIC_TEXT) {
      this._state.musicPage.newArtistText = action.newArtistText;
      this._collSubsriber(this._state);
    }
  },
};

export let addPostactionCriater = () => ({ type: ADD_POST });

export let addMusicActionCcreator = () => ({ type: ADD_MUSIC });

export let upDateNewPostTextactionCriater = (text) => ({
  type: UP_DAATE_NEW_POST_TEXT,
  NewPostText: text,
});

export const updateNewMusicActionCreator = (text) => ({
  type: UPDATE_NEW_MUSIC_TEXT,
  newArtistText: text,
});

export default store;
window.store = store;
