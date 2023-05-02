import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import MusicContainer from './components/Music/MusicContainer';
import NavBar from './components/NavBar/NavBar';
import NewsContainer from './components/News/NewsContainer';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

function App(props) {
  return (
    <div className="appWrapper">
      <Header />
      <NavBar />
      <div className="appWrapperContent">
        <Routes>
          <Route path="/profile" element={<Profile store={props.store} />} />
          <Route path="/dialogs/*" element={<DialogsContainer store={props.store} />} />
          <Route path="/news" element={<NewsContainer store={props.store} />} />
          <Route path="/music" element={<MusicContainer store={props.store} />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
