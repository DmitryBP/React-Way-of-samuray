import React from 'react';
import Dialog from './Dialog/Dialog';
import s from './Dialogs.module.css';
import Message from './Messages/Message';

let MessagesData = [
  {
    message: 'Hi',
  },
  {
    message: 'How are you?',
  },
  {
    message: 'Im fine',
  },
  {
    message: 'And you?',
  },
];

let DialogsData = [
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
];

let messageList = MessagesData.map((message) => <Message message={message.message} />);
let DialogsList = DialogsData.map((dialog) => <Dialog id={dialog.id} name={dialog.name} />);

export default function Dialogs() {
  return (
    <div className={s.DialogsWrapper}>
      <div className={s.dialogs}>{DialogsList}</div>
      <div className={s.Messages}>{messageList}</div>
    </div>
  );
}
