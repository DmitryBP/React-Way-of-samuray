import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addMessage, addPost, cheingeMessageText, newPostText } from './Redux/state';
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
          cheingeMessageText={cheingeMessageText}
          
          newPostText = {newPostText}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
};
