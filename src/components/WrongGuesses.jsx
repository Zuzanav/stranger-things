import React from "react";

const WrongGuesses = ({ wrongGuesses }) => {

    return (
        <div>
            <p>Wrong Guesses: </p>
            <p> { wrongGuesses } </p>
        </div>
    );
}

export default WrongGuesses