import React from 'react'
import './App.css';
import Navbar from './component/nav'
import Herosection from './component/herosection'
import Villainsection from './component/villainsection';
import Watch from './component/watch'
import VideoPlayBack from './component/videoPlayBack';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Herosection />
      <Villainsection />
      <Watch />
      <VideoPlayBack />
    </div>
  );
}

export default App;
