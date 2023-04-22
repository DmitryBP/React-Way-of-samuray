import store from './Redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let renderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          addMessage={store.addMessage.bind(store)}
          addPost={store.addPost.bind(store)}
          addComment = {store.addComment.bind(store)}
          cheingeMessageText={store.cheingeMessageText.bind(store)}
          newPostText={store.newPostText.bind(store)}
          newsOnChengeFn={store.newsOnChengeFn.bind(store)}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
};


renderEntireTree(store.getState());
store.subscrib(renderEntireTree);