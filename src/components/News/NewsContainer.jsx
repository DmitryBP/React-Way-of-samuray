import React from 'react';
import { updateAddNewsAcionCreaor, updateNewsActioCreator } from '../../Redux/News-reducer';
import StoreContext from '../../storeContext';
import News from './News';

export default function NewsContainer() {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const newList = store.getState().newsPage.newsList;
        const newNewsText = store.getState().newsPage.newNewsText;
        const onChangeText = (textareaValue) => {
          store.dispatch(updateNewsActioCreator(textareaValue));
        };
        const onClickBtn = () => {
          store.dispatch(updateAddNewsAcionCreaor());
        };

        return (
          <News
            onClickBtn={onClickBtn}
            onChangeText={onChangeText}
            newList={newList}
            newNewsText={newNewsText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
}
