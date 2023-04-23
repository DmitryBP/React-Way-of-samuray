import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import NavBar from './components/NavBar/NavBar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

function App(props) {
  return (
    <div className="appWrapper">
      <Header />
      <NavBar />
      <div className="appWrapperContent">
        <Routes>
          <Route
            path="/profile"
            element={
              <Profile
                postPage={props.state.postPage}
                statePostText={props.state.postPage.NewPostText}
                dispatch={props.dispatch}
              />
            }
          />
          <Route
            path="/dialogs/*"
            element={
              <Dialogs
                dialogPage={props.state.dialogPage}
                newMessageText={props.state.dialogPage.newMessageText}
                dispatch={props.dispatch}
              />
            }
          />
          <Route
            path="/news"
            element={
              <News
                newsList={props.state.newsPage.newsList}
                commentText={props.state.newsPage.commentText}
                dispatch={props.dispatch}
              />
            }
          />
          <Route
            path="/music"
            element={
              <Music
                musicList={props.state.musicPage.playList}
                newArtistText={props.state.musicPage.newArtistText}
                dispatch={props.dispatch}
              />
            }
          />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
