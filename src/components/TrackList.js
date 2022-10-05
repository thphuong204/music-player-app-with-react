import React from "react";
import useMusicPlayer from "../hooks/usePlayerProvider";
import '../App.css';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';

const TrackList = () => {
    const { trackList, currentTrackIndex, playTrack, isPlaying } =
        useMusicPlayer();
        console.log("currentTrackIndex",currentTrackIndex, "isPlaying:",isPlaying);
    return (
        <div className="tracks-list">
            {trackList.map((track, index) => (
                // ( Surprise us with your code here)
                <div 
                className="song-title-group"
                key={index}
                onClick={()=> {
                    playTrack(index);
                }}
                >
                    <div className="song-title">
                        <div className="listen-icon" style={{fontSize:"10px"}}>
                            {currentTrackIndex === index && isPlaying===true ? (
                                <HeadphonesIcon/>
                            )  : (
                                <PauseCircleIcon/>

                            )}
                        </div>
                        <div className="song">{track.name}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TrackList;