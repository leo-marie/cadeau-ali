import React, { useEffect, useState } from 'react';
import './App.css';
import Game from './components/Game.js';
import Win from './components/Win.js';

// let track = new Audio("https://github.com/leo-marie/cadeau-ali/blob/5fc5540b792a15e68b04d994b11308dc03ea23d1/public/track.mp3");
let track = new Audio("https://raw.githubusercontent.com/leo-marie/cadeau-ali/main/public/track.mp3")

function App() {

  const [view, setView] = useState("game");

  const handleWinClick = () => {
    setView("load");
    setTimeout(() => {
      setView("win")
    }, 3000);
  }

  // RENDER
  const renderContent = () => {
    if (view == "game") {
      return <Game handleWinClick={handleWinClick} />;
    }
    else if(view == "win") {
        return <Win />; 
      };
  
  } // rendercontent

  const testClick = () => {
    track.pause();
    track.currentTime = 0;
    track.play();
  }

  useEffect(() => {
    if(view == "load") {
      track.pause();
      track.currentTime = 0;
      track.play();
      return () => {

      }
    }
  }, [view])


  return (
    <div>
      <div id="content">
        {renderContent()}
      </div>
    </div>
    )
}

export default App;
