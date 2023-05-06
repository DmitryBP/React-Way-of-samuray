import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/redux-store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let renderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};
renderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
});
