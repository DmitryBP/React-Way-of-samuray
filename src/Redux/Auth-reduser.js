import { Navigate } from 'react-router-dom';
import { authAPI } from '../api/api';

const CHANGE_STATE = 'CHANGE_STATE';
const initialState = {
  userId: null,
  email: null,
  login: null,
  // password: null,
  isAuth: false,
};
export default function authReduser(state = initialState, action) {
  switch (action.type) {
    case CHANGE_STATE:
      return {
        ...state,
        id: action.id,
        email: action.email,
        login: action.login,
        isAuth: true,
      };
    default:
      return state;
  }
}

export const chaingeState = (id, email, login, isAuth) => ({ type: CHANGE_STATE, id, email, login, isAuth});

export const getAuthStatus = () => {
  return (dispatch) => {
    authAPI.getAuthStatus().then((data) => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(chaingeState(id, email, login, true));
      }
    });
  };
};
export const logIn = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.logIn(email, password, rememberMe).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthStatus());
      }
    });
  };
};
export const logOut = () => {
  return (dispatch) => {
    authAPI.logOut().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(chaingeState(null, null, null, false))
        return <Navigate to={'/music'}/>
      }
    });
  };
};
