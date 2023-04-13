import React from 'react';
import Dialog from './Dialog/Dialog';
import s from './Dialogs.module.css';
import Message from './Messages/Message';

export default function Dialogs(props) {

  let messageList = props.message.map((message) => <Message message={message.message} />);
  let DialogsList = props.dialogs.map((dialog) => <Dialog id={dialog.id} name={dialog.name} />);

  return (
    <div className={s.DialogsWrapper}>
      <div className={s.dialogs}>{DialogsList}</div>
      <div className={s.Messages}>{messageList}</div>
    </div>
  );
}
