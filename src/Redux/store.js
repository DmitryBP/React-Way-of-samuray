import { dialogReducer } from './Dialog-reduser';
import { musicReducer } from './Music-reducer';
import { newsReducer } from './News-reducer';
import { profileReducer } from './Profile-reducer';

const store = {
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
          sors: 'RBK',
          newsTitle: 'Киркоров опять в Ялте',
        },
        {
          sors: 'Live',
          newsTitle: 'Шура вставил зубы',
        },
        {
          sors: 'Дождь',
          newsTitle: 'Карамурзе дали 25 лет',
        },
      ],
      newNewsText: '',
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
    this._state.postPage = profileReducer(this._state.postPage, action);
    this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
    this._state.musicPage = musicReducer(this._state.musicPage, action); 
    this._state.newsPage = newsReducer(this._state.newsPage, action); 
    this._collSubsriber(this._state);
  },
};

export default store;
window.store = store;
