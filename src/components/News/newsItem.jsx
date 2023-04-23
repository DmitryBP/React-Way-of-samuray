import React from 'react';
import s from './newItem.module.css';

export default function NewsItem(props) {
  let entredText = React.createRef();

  let onChage = () => {
    let text = entredText.current.value;
    props.dispatch({ type: 'UPDATE-NEW-NEWS-TEXT', text: text });
  };

  let addComment = () => {
    props.dispatch({ type: 'ADD-COMMENT' });
  };

  return (
    <div className={s.newsItem}>
      <h2>{props.title}</h2>
      <p>{props.diskription}</p>
      <img src={props.img} alt="img" />
      <div className={s.newsSorse}></div>

      <textarea
        className={s.textarea}
        ref={entredText}
        value={props.commentText}
        onChange={onChage}
      ></textarea>
      <button onClick={addComment}>Add comment</button>
    </div>
  );
}
