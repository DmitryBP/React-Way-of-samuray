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
        tag={props.tag}
        upDateTag={props.upDateTag}
      />
    );
  });

  const addMusic = () => {
    props.addMusic();
  };

  const updateNewMusic = (e) => {
    const text = e.target.value;
    props.updateNewMusic(text);
  };
  return (
    <div>
      <h1>Music</h1>
      <div>Play list</div>
      <ul className={s.list}>{playList}</ul>
      <div>
        <textarea
          className={s.textarea}
          onChange={updateNewMusic}
          value={props.newArtistText}
        ></textarea>
        <button onClick={addMusic} className={s.btn}>
          Add song
        </button>
      </div>
    </div>
  );
}
