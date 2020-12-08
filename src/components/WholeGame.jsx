import React, { useState, useEffect } from "react";
import GuessesLeft from './GuessesLeft';
import ActiveWord from './ActiveWord';
import WrongGuesses from './WrongGuesses';


function WholeGame({}) {
    // Set the state of correct and incorrect guesses to empty array
    //const [correctGuesses, setCorrectGuesses] = useState([]);
    //const [wrongGuesses, setWrongGuesses] = useState([]);

    // This function performs an action after a key was pressed 
    const handleKeyDown = (event) => {
        console.log('A key was pressed', event.keyCode); // delete this later

        // if key pressed does not equate to a letter A-Z, alert the player 
        if ( !(event.keyCode >= 65 && event.keyCode <= 90 ) ){
            alert("Please select a letter only");
        // if key pressed is letter A-Z, continue game 
        } else {
            let letterGuessed = event.keyCode;
            return letterGuessed;
        }
      };

      
    

    // Add Event Listener 
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)  
            
        // cleanup this component, AKA, stop the event listener
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

