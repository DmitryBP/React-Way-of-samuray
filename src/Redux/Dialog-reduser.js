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
      id: 10,
    },
    {
      message: 'How are you?',
      id: 11,
    },
    {
      message: 'Im fine',
      id: 12,
    },
    {
      message: 'And you?',
      id: 13,
    },
  ],
  newMessageText: '',
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const newMessageObj = {
        id: 112,
        message: state.newMessageText,
      };
      return {
        ...state,
        messages: [...state.messages, newMessageObj],
        newMessageText: '',
      };
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      return {
        ...state,
        newMessageText: action.cheingedText,
      };
    }
    default:
      return state;
  }
};
export let addMessage = () => ({ type: 'ADD-MESSAGE' });
export let updateNewMessageText = (text) => ({
  type: 'UPDATE-NEW-MESSAGE-TEXT',
  cheingedText: text,
});
export default dialogReducer;
