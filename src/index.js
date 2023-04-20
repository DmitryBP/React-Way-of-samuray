import { state, subscrib } from './Redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  addComment,
  addMessage,
  addPost,
  cheingeMessageText,
  newPostText,
  newsOnChengeFn,
} from './Redux/state';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let renderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          addMessage={addMessage}
          addPost={addPost}
          addComment = {addComment}
          cheingeMessageText={cheingeMessageText}
          newPostText={newPostText}
          newsOnChengeFn={newsOnChengeFn}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
};


renderEntireTree(state);
subscrib(renderEntireTree);