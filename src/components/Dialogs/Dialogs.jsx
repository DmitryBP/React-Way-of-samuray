import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

export default function Dialogs(props) {
  let dialogsElement = props.contactData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesElement = props.messageData.map((messag) => <Message messag={messag.message} />);
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogsElement}</div>
      <div className={s.messages}>{messagesElement}</div>
    </div>
  );
}
