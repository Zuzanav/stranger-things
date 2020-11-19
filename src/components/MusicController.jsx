import React from "react";
import useSound from 'use-sound';
import music from "../assets/theme.mp3";



function MusicController() {
    const [play] = useSound(music)
    return (
        <div>
            <button id="music-player" onClick={play} > 
                Play 
            </button>
            <button id="pause-player"> Pause </button>
        </div>
    );
}

export default MusicController;