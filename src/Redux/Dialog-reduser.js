const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const initialState = {
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
}

 const dialogReducer = (state = initialState, action) => {
  if (action.type === ADD_MESSAGE) {
    let newMessageObj = {
      message: state.newMessageText,
    };
    state.messages.push(newMessageObj);
    state.newMessageText = '';
  } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
    state.newMessageText = action.cheingedText;
  }
  return state;
};

export default dialogReducer;