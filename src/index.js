
import { state, subscriber } from './Redux/state';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost, updateNewPostText} from './Redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
let renderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <App state={state} addPost = {addPost} updateNewPostText={updateNewPostText}/>
    </BrowserRouter>
  );
}

renderEntireTree(state);

subscriber(renderEntireTree)

reportWebVitals();
