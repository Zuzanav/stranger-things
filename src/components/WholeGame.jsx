import React, { useState, useEffect } from "react";
import GuessesLeft from './GuessesLeft';
import ActiveWord from './ActiveWord';
import WrongGuesses from './WrongGuesses';


function WholeGame({}) {
    // VARIABLES ----------------------------------------------------------------
    
    // Array with all letters of the alphabet for computer to choose from 
    let words = ["demogorgan", "eleven", "hawkins", "spy", "waffles", 
    "magnets", "hopper", "starcourt", "dart", "joyce", "arcade", "dustin"];

    // array defined to hold the active word in play, and display on DOM
    let activeWord = [];

//--------------------------------------------------------------------------


// GAME SET UP  =============================================================

    // computer selects a random word from the array
    let randomWord = words[Math.floor(Math.random()*words.length)]
    console.log(randomWord);

    // SET UP BOARD --------------------------------------------------------------
    // loop creates x amount of underscores "_" based on amount of characters in selected word
    for (let i = 0; i < randomWord.length; i++){
        activeWord[i] = "_"
    };

    // split randomWord into its individual characters
    let lettersArray = Array.from(randomWord)

    console.log(activeWord);
    console.log("words characters: " + lettersArray);

    // Set the state of correct and incorrect guesses to empty array
    const [correctGuesses, setCorrectGuesses] = useState([]);
    const [wrongGuesses, setWrongGuesses] = useState([]);

    // This function performs an action after a key was pressed 
    const handleKeyDown = (event) => {
        console.log('A key was pressed', event.keyCode); // delete this later

        // if key pressed does not equate to a letter A-Z, alert the player 
        if ( !(event.keyCode >= 65 && event.keyCode <= 90 ) ){
            alert("Please select a letter only");
        // if key pressed is letter A-Z, continue game 
        } else {
            let userGuess = event.key;

            // correctGuess is true if that letter is included in the letter array of the active word
            var correctGuess = lettersArray.includes(userGuess); 
            console.log("user guess", userGuess);

            if ( correctGuess === false ) {
                setWrongGuesses(currentGuess => [...currentGuess, userGuess] );
            } else if ( correctGuess === true ) {
                console.log("TRUE! CORRECT GUESS!")
            }
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
            <ActiveWord activeword={activeWord} /> 
            <WrongGuesses wrongGuesses={wrongGuesses} />
        </div>
    );
}

export default WholeGame;

