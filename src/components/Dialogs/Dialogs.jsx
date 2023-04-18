import React from 'react';
import Dialog from './Dialog/Dialog';
import s from './Dialogs.module.css';
import Message from './Messages/Message';

export default function Dialogs(props) {
  let messageList = props.dialogPage.messages.map((message) => (
    <Message message={message.message} />
  ));
  let DialogsList = props.dialogPage.dialogs.map((dialog) => (
    <Dialog id={dialog.id} name={dialog.name} />
  ));
  let entredMessageText = React.createRef();

  let addMessage = () => {
    props.addMessage();
  };
  let cheingeMessageText = () => {
    let text = entredMessageText.current.value;
    props.cheingeMessageText(text)
  }

  return (
    <div className={s.DialogsWrapper}>
      <div className={s.dialogs}>{DialogsList}</div>
      <div className={s.Messages}>
        <textarea
          onChange={cheingeMessageText}
          value={props.newMessageText}
          ref={entredMessageText}
          className={s.textArea}
        ></textarea>
        <button onClick={addMessage}>Add message</button>
        {messageList}
      </div>
    </div>
  );
}
