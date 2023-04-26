import React from 'react';
import NewsItem from './NewsItem';
import s from './news.module.css';
import { updateAddNewsAcionCreaor, updateNewsActioCreator } from '../../Redux/News-reducer';

export default function News(props) {
  let newsList = props.newsList.map((news) => {
    return <NewsItem newsTitle={news.newsTitle} sors={news.sors} />;
  });

  let onChange = (e) => {
    let textareaValue = e.target.value;
    props.dispatch(updateNewsActioCreator(textareaValue));
  };

  let onClick = () => {
    props.dispatch(updateAddNewsAcionCreaor())
  }

  return (
    <div>
      <h1 className={s.h1}>News</h1>
      <div>{newsList}</div>
      <div>
        <textarea className={s.textarea1} value={props.newNewsText} onChange={onChange} />
        <button 
        onClick={onClick}
        >add News</button>
      </div>
    </div>
  );
}
