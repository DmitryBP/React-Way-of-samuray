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
                newPostText={props.newPostText}
                statePostText={props.state.postPage.newPostText}
                addPost={props.addPost}
              />
            }
          />
          <Route
            path="/dialogs/*"
            element={
              <Dialogs
                dialogPage={props.state.dialogPage}
                addMessage={props.addMessage}
                newMessageText={props.state.dialogPage.newMessageText}
                cheingeMessageText={props.cheingeMessageText}
              />
            }
          />
          <Route
            path="/news"
            element={
              <News
                newsList={props.state.newsPage.newsList}
                newsOnChengeFn={props.newsOnChengeFn}
                commentText={props.state.newsPage.commentText}
                addComment={props.addComment}
              />
            }
          />
          <Route path="/music" element={<Music musicList={props.state.musicPage.playList} />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
