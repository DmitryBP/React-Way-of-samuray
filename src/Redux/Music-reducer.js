const ADD_MUSIC = 'ADD-MUSIC';
const UPDATE_NEW_MUSIC_TEXT = 'UPDATE_NEW_MUSIC_TEXT';

const initialState = {
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
};

export let addMusicActionCreator = () => ({ type: ADD_MUSIC });

export const updateNewMusicActionCreator = (text) => ({
  type: UPDATE_NEW_MUSIC_TEXT,
  newArtistText: text,
});

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MUSIC:
      let newMusicObj = {
        albumCover:
          'https://mediamall.am/timthumb.php?src=upload/52210.png&w=300&h=300&mt=1505519127',
        artist: state.newArtistText,
        song: 'Blue sky',
      };
      state.playList.push(newMusicObj);
      return state;

    case UPDATE_NEW_MUSIC_TEXT:
      state.newArtistText = action.newArtistText
      return state;

    default:
      return state;
  }
};

export default musicReducer