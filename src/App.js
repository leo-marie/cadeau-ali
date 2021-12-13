import React, { useEffect, useState } from 'react';
import './App.css';
import Game from './components/Game.js';
import Win from './components/Win.js';



function App() {

  const [view, setView] = useState("game");

  const handleWinClick = () => {
    setView("win")
  }

  // RENDER
  const renderContent = () => {
    if (view == "game") {
      return <Game handleWinClick={handleWinClick} />;
    }
    else if(view == "win") {
      return <Win />;
    }
  } // rendercontent


  return (
    <div>
      
      <div id="content">
        {renderContent()}
      </div>
    </div>
    )
}

export default App;
