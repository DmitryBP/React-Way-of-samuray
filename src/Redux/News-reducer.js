const ADD_NEWS = 'ADD-NEWS';
const UPDATE_NEWS_TEXT = 'UPDATE-NEWS-TEXT';
const initialState = {
  newsList: [
    {
      id: 1,
      sors: 'RBK',
      newsTitle: 'Киркоров опять в Ялте',
    },
    {
      id: 2,
      sors: 'Live',
      newsTitle: 'Шура вставил зубы',
    },
    {
      id: 3,
      sors: 'Дождь',
      newsTitle: 'Карамурзе дали 25 лет',
    },
  ],
  newNewsText: '',
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEWS:
      const newNewsObj = {
        id: 123,
        sors: 'RBK',
        newsTitle: state.newNewsText,
      };
      return {
        ...state,
        newsList: [...state.newsList, newNewsObj],
        newNewsText: '',
      };
    case UPDATE_NEWS_TEXT:
      return {
        ...state,
        newNewsText: action.textareaValue,
      };

    default:
      return state;
  }
};

export const updateNewsActioCreator = (textareaValue) => {
  return {
    type: UPDATE_NEWS_TEXT,
    textareaValue,
  };
};

export const updateAddNewsAcionCreaor = () => {
  return { type: ADD_NEWS };
};

export default newsReducer;
