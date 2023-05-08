import React from 'react';
import Dialog from './Dialog/Dialog';
import s from './Dialogs.module.css';
import Message from './Messages/Message';

export default function Dialogs(props) {
  const messages = props.messages;
  const dialogs = props.dialogs;

  const messageList = messages.map((message) => <Message message={message.message} />);
  const DialogsList = dialogs.map((dialog) => <Dialog id={dialog.id} name={dialog.name} />);

  const addMessage = () => {
    props.addMessage();
  };

  const updateNewMessageText = (e) => {
    const text = e.target.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={s.DialogsWrapper}>
      <div className={s.dialogs}>{DialogsList}</div>
      <div className={s.Messages}>
        <textarea
          onChange={updateNewMessageText}
          value={props.newMessageText}
          className={s.textArea}
        ></textarea>
        <button onClick={addMessage}>Add message</button>
        {messageList}
      </div>
    </div>
  );
}
