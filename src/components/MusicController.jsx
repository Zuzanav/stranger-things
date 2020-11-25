import React from "react";
import useSound from 'use-sound';
import music from "../assets/theme.mp3";


function MusicController() {
    const [play, {pause, isPlaying} ] = useSound(music);
    return (
            <button id="music-player" 
                
                onClick={ () => { 
                    if (isPlaying) {
                        pause();
                    } else {
                        play();
                    }
                }} > 
                Play/Pause 
            </button>
    );
}

export default MusicController;