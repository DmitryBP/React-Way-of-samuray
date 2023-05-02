import React from 'react';
import NewsItem from './NewsItem';
import s from './News.module.css';

export default function News(props) {
  let newsList = props.newList.map((news) => {
    return <NewsItem newsTitle={news.newsTitle} sors={news.sors} />;
  });

  let onChange = (e) => {
    let textareaValue = e.target.value;
    props.onChangeText(textareaValue);
  };

  let onClick = () => {
    props.onClickBtn()
  }

  return (
    <div>
      <h1 className={s.h1}>News</h1>
      <div>{newsList}</div>
      <div>
        <textarea 
        className={s.textarea1} 
        onChange={onChange} 
        value={props.newNewsText}
        />
        <button 
        onClick={onClick}
        >add News</button>
      </div>
    </div>
  );
}
