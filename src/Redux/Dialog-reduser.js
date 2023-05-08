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
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:{
      let newMessageObj = {
        message: state.newMessageText,
      };
      let stateCopy = {...state}
      stateCopy.messages = [...stateCopy.messages]
      stateCopy.messages.push(newMessageObj);
      stateCopy.newMessageText = '';
      return stateCopy;
    }
    case UPDATE_NEW_MESSAGE_TEXT:{
      let stateCopy = {...state}
      stateCopy.newMessageText = action.cheingedText;
      return stateCopy;
    }
    default:
      return state;
  }
};
export let addMessageActionCreator = () => ({ type: 'ADD-MESSAGE' });
export let updateNewMessageTextActionCreator = (text) => ({
  type: 'UPDATE-NEW-MESSAGE-TEXT',
  cheingedText: text,
});
export default dialogReducer;
