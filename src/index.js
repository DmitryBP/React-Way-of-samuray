import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { posts } from './Data/posts';
import { contactData } from './Data/contactData';
import { messageData } from './Data/messageData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App posts={posts} contactData={contactData} messageData={messageData} />
  </BrowserRouter>
);

reportWebVitals();
