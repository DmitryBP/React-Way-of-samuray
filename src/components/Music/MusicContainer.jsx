import React from 'react';
import { addMusicActionCreator, updateNewMusicActionCreator } from '../../Redux/Music-reducer';
import StoreContext from '../../storeContext';
import Music from './Music';

export default function MusicContainer() {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState();
        const onClickBtn = () => {
          store.dispatch(addMusicActionCreator());
        };
        const onCheingeText = (text) => {
          store.dispatch(updateNewMusicActionCreator(text));
        };
        return (
          <Music
            onClickBtn={onClickBtn}
            onCheingeText={onCheingeText}
            playList={state.musicPage.playList}
          />
        );
      }}
    </StoreContext.Consumer>
  );
}
