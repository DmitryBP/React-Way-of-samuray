import React from 'react';
import { addMusicActionCreator, updateNewMusicActionCreator } from '../../Redux/Music-reducer';
import Music from './Music';

export default function MusicContainer(props) {
  const state = props.store.getState()
  const onClickBtn = () => {
    props.store.dispatch(addMusicActionCreator());
  };

  const onCheingeText = (text) => {
    props.store.dispatch(updateNewMusicActionCreator(text));
  };
console.log(state.musicPage);
  return (
    <Music
      onClickBtn={onClickBtn}
      onCheingeText={onCheingeText}
      playList={state.musicPage.playList}
    />
  );
}
