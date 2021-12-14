import React, { useEffect, useState } from 'react';
import billets from "../billets.PNG";

const Win = () => {

    return (

        <div id="win-content">
            <iframe width="420" height="315"
            src="https://www.youtube.com/watch?v=zEZRKgFIkxc?autoplay=1">
            </iframe>
            <img id="image-billets" src={billets}></img>
            <div className="description">2 billets dans la fosse pour aller avec qui tu veux ! Par exemple moi !</div>
        </div>


    
        );
    }
    
    export default Win;