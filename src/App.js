import React, { useEffect, useState } from 'react';
import './App.css';
import Game from './components/Game.js';
import Win from './components/Win.js';

let track = new Audio("https://raw.githubusercontent.com/leo-marie/cadeau-ali/main/public/samples/track.mp3");
// let track = new Audio("https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/tekno02.mp3");

function App() {

  const [view, setView] = useState("game");

  const handleWinClick = () => {
    setView("win");
  }

  // RENDER
  const renderContent = () => {
    if (view == "game") {
      track.play();
      return <Game handleWinClick={handleWinClick} />;
    }
    else if(view == "win") {
      return <Win />;
    }
  } // rendercontent

  const testClick = () => {
    track.pause();
    track.currentTime = 0;
    track.play();
  }


  return (
    <div>
      <div id="content">
        <button onClick={testClick}>TEST</button>
        {renderContent()}
      </div>
    </div>
    )
}

export default App;
