import React from 'react';
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../../Redux/Dialog-reduser';
import Dialogs from './Dialogs';

export default function DialogsContainer(props) {
  const state = props.store.getState();
  const addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };
  const updateNewMessageText = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  };
console.log(state.dialogPage);
  return (
    <Dialogs
      updateNewMessageText={updateNewMessageText}
      addMessage={addMessage}
      dialogPage={state.dialogPage}
    />
  );
}
