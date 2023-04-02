import React from 'react';
import './App.css';

function App() {
  return (
    <div className="appWrapper">
      <header className="header">
        <div className="logo">
          <img
            src="https://yoomark.com/sites/default/files/field/image/react-technologies-9ce31d51432424bcd4626f5f730580f3cddc9c211c1577e9950138550233542a_0.png"
            alt="logo"
          />
          <div>React reducs samury curs</div>
        </div>
      </header>
      <nav className="nav">
        <div>
          <a href="./#">Profile</a>
        </div>
        <div>
          <a href="./#">Messages</a>
        </div>
        <div>
          <a href="./#">Music</a>
        </div>
        <div>
          <a href="./#">News</a>
        </div>
        <div>
          <a href="./#">Settings</a>
        </div>
      </nav>
      <main className="content">
        <div className="mainBaner" />
        <div>ava + discrription</div>
        <div>
          My posts
          <div>New post</div>
          <div>
            <div>Post1</div>
            <div>Post2</div>
            <div>Post3</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
