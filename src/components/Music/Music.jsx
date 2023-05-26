import React from 'react';
import s from './Music.module.css';
import MusicItem from './MusikItem/MusicItem';

export default function Music(props) {
  const playList = props.playList.map((musicItem, i) => {
    return (
      <MusicItem
        key={i}
        albumCover={musicItem.albumCover}
        artist={musicItem.artist}
        song={musicItem.song}
      />
    );
  });

  const onClickBtn = () => {
    props.onClickBtn();
  };

  const onCheingeText = (e) => {
    const text = e.target.value;
    props.onCheingeText(text);
  };
  return (
    <div>
      <h1>Music</h1>
      <div>Play list</div>
      <ul className={s.list}>{playList}</ul>
      <div>
        <textarea
          className={s.textarea}
          onChange={onCheingeText}
          value={props.newArtistText}
        ></textarea>
        <button onClick={onClickBtn} className={s.btn}>
          Add song
        </button>
      </div>
    </div>
  );
}
