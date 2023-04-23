import React from 'react';
import { addMusicActionCreator, updateNewMusicActionCreator } from '../../Redux/state';
import s from './Music.module.css';
import MusicItem from './MusikItem/MusicItem';

export default function Music(props) {
  let musicItemList = props.musicList.map((musicItem) => {
    return (
      <MusicItem
        albumCover={musicItem.albumCover}
        artist={musicItem.artist}
        song={musicItem.song}
      />
    );
  });

  let textareaValue = React.createRef();

  let onCheinge = () => {
    let text = textareaValue.current.value;
    props.dispatch(updateNewMusicActionCreator(text));
  };

  let onClick = () => {
    props.dispatch(addMusicActionCreator());
  };

  return (
    <div>
      <h1>Music</h1>
      <div>Play list</div>
      <ul className={s.list}>{musicItemList}</ul>
      <div>
        <textarea
          ref={textareaValue}
          className={s.textarea}
          value={props.newArtistText}
          onChange={onCheinge}
        ></textarea>
        <button onClick={onClick} className={s.btn}>
          Add song
        </button>
      </div>
    </div>
  );
}
