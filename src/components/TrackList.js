import React from "react";
import useMusicPlayer from "../hooks/usePlayerProvider";

const { trackList, currentTrackName, playTrack, isPlaying } =
    useMusicPlayer();

const TrackList = () => {
    const { trackList, currentTrackName, playTrack, isPlaying } =
        useMusicPlayer();

    return (
        <>
            {trackList.map((track, index) => (
                // ( Surprise us with your code here)

                <div className="song-title">{track.name}</div>
            ))}
        </>
    );
};

export default TrackList;