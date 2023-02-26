import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

let dialogData = [
  { id: 1, name: 'Dima' },
  { id: 2, name: 'Vika' },
  { id: 3, name: 'Tania' },
  { id: 4, name: 'Nina' },
  { id: 5, name: 'Vova' },
  { id: 6, name: 'Denis' },
];

let messageData = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'Haw are your' },
  { id: 3, message: 'Do your love me' },
  { id: 4, message: 'What a problem?' },
];

let dialogsElement = dialogData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);
let messagesElement = messageData.map((messag) => <Message messag={messag.message} />);

export default function Dialogs() {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogsElement}</div>
      <div className={s.messages}>
        {/* было несколько компанент принимающих разные данные*/}
        {/* <Message messag={messageData[0].message} />
        <Message messag={messageData[1].message} />
        <Message messag={messageData[2].message} />
        <Message messag={messageData[3].message} /> */}

        {/* Стало: замепенный массив компонент  */}
        {messagesElement}
      </div>
    </div>
  );
}
