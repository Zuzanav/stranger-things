import React, { useState, useEffect } from "react";
import GuessesLeft from './GuessesLeft';
import ActiveWord from './ActiveWord';
import WrongGuesses from './WrongGuesses';


function WholeGame({}) {
    // Set the state of correct and incorrect guesses to empty array
    //const [correctGuesses, setCorrectGuesses] = useState([]);
    //const [wrongGuesses, setWrongGuesses] = useState([]);

    const handleKeyDown = (event) => {
        console.log('A key was pressed', event.keyCode);
      };

    // Add Event Listener 
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)  
            
        // cleanup this component
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
      
    }, []);

    return(
        <div id="main-body">
            <GuessesLeft />
            <ActiveWord />
            <WrongGuesses />
        </div>
    );
}

export default WholeGame;

