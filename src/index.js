
import store, { addPost } from './Redux/state';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
let renderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} dispatch = {store.dispatch.bind(store)}/>
    </BrowserRouter>
  );
}
// addPost('test message!')
renderEntireTree(store._state);

store.subscriber(renderEntireTree)

reportWebVitals();
