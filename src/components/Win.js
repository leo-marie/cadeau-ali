import React, { useEffect, useState } from 'react';
import billets from "../billets.PNG";

const Win = () => {

    return (

        <div id="win-content">
            <iframe width="260" height="180" src="https://www.youtube.com/embed/zEZRKgFIkxc?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <img id="image-billets" src={billets}></img>
            <div className="description2">2 billets dans la fosse pour aller avec qui tu veux ! Par exemple moi !</div>
        </div>


    
        );
    }
    
    export default Win;