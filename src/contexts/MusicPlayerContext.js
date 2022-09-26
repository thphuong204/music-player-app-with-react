import React, { useState } from "react";
import Track1 from "../mock_data/track1.mp3";
import Track2 from "../mock_data/track2.mp3";
import Track3 from "../mock_data/track3.mp3";

const MusicPlayerContext = React.createContext();


const defaultValues = {
    audioPlayer: new Audio(),
    tracks: [
        {
            name: "New day - Piano",
            file: Track1,
        },
        {
            name: "Something new - Piano",
            file: Track2,
        },
        {
            name: "Relax - Piano",
            file: Track3,
        },
    ],
    currentTrackIndex: null,
    isPlaying: false,
}


const MusicPlayerProvider = ({ children }) => {
    const [state, setState] = useState(defaultValues);
    return (
        <MusicPlayerContext.Provider value={{ state, setState }}>
            {children}
        </MusicPlayerContext.Provider>
    );
};

export { MusicPlayerContext, MusicPlayerProvider };