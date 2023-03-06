import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { state } from './Redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <App posts={posts} contactData={contactData} messageData={messageData} /> */}
    <App state={state} />
  </BrowserRouter>
);

reportWebVitals();
