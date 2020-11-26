import React, { useState } from "react";
import WholeGame from './WholeGame'


function StartButton( {}) {
    const [ isOpened, setIsOpened ] = useState(false);

    function toggle() {
        setIsOpened(wasOpened => !wasOpened);
    }
    
    return(
        <div>
            <div>
                <button onClick={toggle}> Start Game </button>
            </div>

            {isOpened && ( 
                <WholeGame className="boxContent">
                </WholeGame>
            )}
        </div>
    );
}

export default StartButton;