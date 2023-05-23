const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_FEACHENG = 'TOGGLE_FEACHENG';
const TOGGLE_ACTIVE_BTN = 'TOGGLE_ACTIVE_BTN';

const initialState = {
  users: [],
  pageSize: 5,
  totalUserCount: 20,
  currentPage: 1,
  isFetching: true,
  isBtnActive: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page,
      };
    case SET_TOTAL_USER_COUNT:
      return {
        ...state,
        totalUserCount: action.totalUsersCount,
      };
    case TOGGLE_FEACHENG:
      return {
        ...state,
        isFetching: action.toggle,
      };
    case TOGGLE_ACTIVE_BTN:
      return {
        ...state,
        isBtnActive: action.toggle
          ? [...state.isBtnActive, action.userId]
          : state.isBtnActive.filter((el) => el !== action.userId),
      };
    default:
      return state;
  }
};

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unFollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page });
export const togleFeacheng = (toggle) => ({ type: TOGGLE_FEACHENG, toggle });
export const togleActiveBtn = (toggle, userId) => ({ type: TOGGLE_ACTIVE_BTN, toggle, userId });
// export const setTotalUserCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USER_COUNT, totalUsersCount });

export default usersReducer;
