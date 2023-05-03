import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/redux-store';
import StoreContext from './storeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let renderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
      <StoreContext.Provider value={store}>
        <App/>
      </StoreContext.Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};
renderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
});
