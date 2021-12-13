import React, { useEffect, useState } from 'react';
import billets from "../billets.PNG";

const Win = () => {

    return (

        <div id="win-content">
            <img id="image-billets" src={billets}></img>
            <div className="description">2 billets dans la fosse pour aller avec qui tu veux ! Par exemple moi !</div>
        </div>


    
        );
    }
    
    export default Win;