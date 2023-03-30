import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

export default function Dialogs(props) {

  let addMessage = (text) => {
    props.addPost(text)
  }

  let newMessageElement = React.createRef()

  let dialogsElement = props.state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} ava={dialog.ava}/>
  ));
  let messagesElement = props.state.messages.map((messag) => <Message addPost={props.addPost} messag={messag.message} speacker = {messag.speacker}/>);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogsElement}</div>
      <div className={s.messages}>{messagesElement}</div>
      <div className={s.messageEnterBox}>
        <textarea ref={newMessageElement} className={s.textArea}></textarea>
        <button onClick={addMessage}>Send message</button>
      </div>
    </div>
  );
}
