import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Musick from './components/Musick/Musick';
import { Route, Routes } from 'react-router-dom';

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/dialogs" element={<Dialogs state={props.state.dialogsPage} />} />
          <Route path="/profile" element={<Profile state={props.state.messagesPage} alert1 = {props.state} addPost = {props.addPost}/>} />
          <Route path="/news" element={<News />} />
          <Route path="/musick" element={<Musick />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
