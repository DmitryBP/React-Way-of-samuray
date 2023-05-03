import React from 'react';
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../../Redux/Dialog-reduser';
import StoreContext from '../../storeContext';
import Dialogs from './Dialogs';

export default function DialogsContainer() {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState();
        const addMessage = () => {
          store.dispatch(addMessageActionCreator());
        };
        const updateNewMessageText = (text) => {
          store.dispatch(updateNewMessageTextActionCreator(text));
        };
        return (
          <Dialogs
            updateNewMessageText={updateNewMessageText}
            addMessage={addMessage}
            dialogPage={state.dialogPage}
          />
        );
      }}
    </StoreContext.Consumer>
  );
}
