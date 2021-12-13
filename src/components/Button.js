import React, { useEffect, useState } from 'react';
import '../App.css';

const Button = () => {

const [clicked, setClicked] = useState(false);

const handleClick = () => {
    setClicked(!clicked)
}

const renderButton = () => {
    if(!clicked) {
        return <div className="game-button" onClick={handleClick}>Ici ?</div>
    } else {
        return <div className="game-button-clicked" onClick={handleClick}>Nope!</div>
    }
}


    return (

        <div id="button-content">
            {renderButton()}
        </div>


    
        );
    }
    
    export default Button;