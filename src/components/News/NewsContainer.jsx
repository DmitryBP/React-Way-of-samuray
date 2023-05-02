import React from 'react';
import { updateAddNewsAcionCreaor, updateNewsActioCreator } from '../../Redux/News-reducer';
import News from './News';

export default function NewsContainer(props) {
  const newList = props.store.getState().newsPage.newsList;
  const newNewsText = props.store.getState().newsPage.newNewsText;
  const onChangeText = (textareaValue) => {
    props.store.dispatch(updateNewsActioCreator(textareaValue));
  };

  const onClickBtn = () => {
    props.store.dispatch(updateAddNewsAcionCreaor());
  };

  return (
    <News
      onClickBtn={onClickBtn}
      onChangeText={onChangeText}
      newList={newList}
      newNewsText={newNewsText}
    />
  );
}
