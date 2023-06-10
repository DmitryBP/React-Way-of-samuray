import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const UP_DAATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

const initialState = {
  posts: [
    {
      id: 1,
      img: 'https://sun1-54.userapi.com/s/v1/if1/0h_JqumO9DvcvBnpIXKnb15tL1Ul9KUA4EIRpUCeWVaS3nxfTSppU7Prfq5xJUSJNDvOzb9X.jpg?size=200x200&quality=96&crop=139,0,437,437&ava=1',
      alt: 'img1',
      post: 'это тестовый пост 1',
      like: 'like 3',
    },
    {
      id: 2,
      img: 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg',
      alt: 'img2',
      post: 'это тестовый пост 2',
      like: 'like 5',
    },
  ],
  NewPostText: '',
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 111,
        img: 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg',
        alt: 'img2',
        post: state.NewPostText,
        like: 'like 6',
      };
      let stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      stateCopy.NewPostText = '';
      return stateCopy;
    }
    case UP_DAATE_NEW_POST_TEXT: {
      let stateCopy = { ...state };
      stateCopy.NewPostText = action.NewPostText;
      return stateCopy;
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.string };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    default:
      return state;
  }
};
export const addPostactionCriater = () => ({ type: ADD_POST });
export const setUserProfile = (string) => ({ type: SET_USER_PROFILE, string });
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const upDateNewPostTextactionCriater = (text) => ({
  type: UP_DAATE_NEW_POST_TEXT,
  NewPostText: text,
});

export const getProfile = (userId) => {
  return async (dispatch) => {
    const response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
  };
};
export const getStatus = (userId) => {
  return async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
  };
};
export const updateStatus = (status) => {
  return async (dispatch) => {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  };
};
export default profileReducer;
