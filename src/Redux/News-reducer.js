const ADD_NEWS = 'ADD-NEWS';
const UPDATE_NEWS_TEXT = 'UPDATE-NEWS-TEXT';
const initialState = {
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
}

 const newsReducer = (state = initialState, action) =>  {
  switch (action.type) {
    case ADD_NEWS:
      let newNewsObj = {
        sors: 'RBK',
        newsTitle: state.newNewsText,
      };
      state.newsList.push(newNewsObj);
      state.newNewsText = '';
      return state;
    case UPDATE_NEWS_TEXT:
      state.newNewsText = action.textareaValue;
      return state;
  
    default:
      return state;
  }
}

export let updateNewsActioCreator = (textareaValue) => {
  return {
    type: UPDATE_NEWS_TEXT,
    textareaValue: textareaValue,
  };
};

export let updateAddNewsAcionCreaor = () => {
  return { type: ADD_NEWS };
};

export default newsReducer