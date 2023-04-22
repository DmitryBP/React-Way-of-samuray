import React from 'react';
import s from './newItem.module.css';

export default function NewsItem(props) {
  let entredText = React.createRef();

  let onChage = () => {
    let text = entredText.current.value;
    props._updateNewNewsText(text);
  };

  let _addComment = () => {
    props._addComment();
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
      <button onClick={_addComment}>Add comment</button>
    </div>
  );
}
