import React from 'react'

export default function NewsItem(props) {

  return (
    <div>
      <h2>{props.newsTitle}</h2>
      <p>источник - {props.sors}</p>
    </div>
  )
}
