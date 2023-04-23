import React from 'react';
import NewsItem from './newsItem';

export default function News(props) {
  let newsItemList = props.newsList.map((newItem) => {
    return (
      <NewsItem
        title={newItem.newTitle}
        diskription={newItem.newDiskription}
        img={newItem.newImg}
        dispatch={props.dispatch}
      />
    );
  });

  return (
    <div>
      <h1>News</h1>
      {newsItemList}
    </div>
  );
}
