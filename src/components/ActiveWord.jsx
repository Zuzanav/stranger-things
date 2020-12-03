import React from "react";

function ActiveWord() {

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
    let charsArray = Array.from(randomWord)

    console.log(activeWord);
    console.log("words characters: " + charsArray);

    return (
        <div>
            <p> {activeWord} </p>
        </div>
    );
}

export default ActiveWord;