const CHANGE_STATE = 'CHANGE_STATE';
const initialState = {
  login: null,
};
export default function authReduser(state = initialState, action) {
  switch (action.type) {
    case CHANGE_STATE:
      return {
        ...state,
        login: action.login,
      };

    default:
      return state;
  }
}

export let chaingeState = (login) => ({ type: CHANGE_STATE, login });