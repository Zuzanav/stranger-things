import React, { useState } from "react";
import GuessesLeft from './GuessesLeft';
import ActiveWord from './ActiveWord';
import GuessedLetters from './GuessedLetters';


function WholeGame( { }) {

    return(
        <div id="main-body">
            <GuessesLeft />
            <ActiveWord />
            <GuessedLetters />
        </div>
    );
}

export default WholeGame;