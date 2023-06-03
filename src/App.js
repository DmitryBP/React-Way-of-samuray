import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import MusicContainer from './components/Music/MusicContainer';
import NavBar from './components/NavBar/NavBar';
import NewsContainer from './components/News/NewsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/usersContainer';

function App() {
  return (
    <div className="appWrapper">
      <HeaderContainer />
      <NavBar />
      <div className="appWrapperContent">
        <Routes>
          <Route path="/profile/*" element={<ProfileContainer />} />
          <Route path="/login" element={<Login />} />
          <Route path = '/profile/:userId' element ={<ProfileContainer />} />
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/news" element={<NewsContainer />} />
          <Route path="/music" element={<MusicContainer />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/users" element={<UsersContainer/>} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
