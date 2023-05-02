import React from 'react';
import Dialog from './Dialog/Dialog';
import s from './Dialogs.module.css';
import Message from './Messages/Message';

export default function Dialogs(props) {
  let state = props.dialogPage
  let messageList = state.messages.map((message) => (
    <Message message={message.message} />
  ));
  let DialogsList = state.dialogs.map((dialog) => (
    <Dialog id={dialog.id} name={dialog.name} />
  ));

  let addMessage = () => {
    props.addMessage();
  };

  let updateNewMessageText = (e) => {
    let text = e.target.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={s.DialogsWrapper}>
      <div className={s.dialogs}>{DialogsList}</div>
      <div className={s.Messages}>
        <textarea
          onChange={updateNewMessageText}
          // value={props.newMessageText}
          className={s.textArea}
        ></textarea>
        <button onClick={addMessage}>Add message</button>
        {messageList}
      </div>
    </div>
  );
}
