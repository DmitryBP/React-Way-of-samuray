import React from 'react';
import NewsItem from './newsItem';

export default function News(props) {
  let newsItemList = props.newsList.map((newItem) => {
    return (
      <NewsItem
        title={newItem.newTitle}
        diskription={newItem.newDiskription}
        img={newItem.newImg}
        _updateNewNewsText={props._updateNewNewsText}
        commentText={props.commentText}
        _addComment={props._addComment}
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
