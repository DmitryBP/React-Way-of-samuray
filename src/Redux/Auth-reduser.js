import { authAPI } from '../api/api';

const CHANGE_STATE = 'CHANGE_STATE';
const initialState = {
  login: null,
  isAuth: false,
};
export default function authReduser(state = initialState, action) {
  switch (action.type) {
    case CHANGE_STATE:
      return {
        ...state,
        login: action.login,
        isAuth: true
      };
    default:
      return state;
  }
}

export const chaingeState = (login) => ({ type: CHANGE_STATE, login });

export const getAuthStatus = () => {
  return (dispatch) => {
    authAPI.getAuthStatus().then((data) => {
      if (data.resultCode === 0) {
        let { login } = data.data;
        dispatch(chaingeState(login));
      }
    });
  };
};
