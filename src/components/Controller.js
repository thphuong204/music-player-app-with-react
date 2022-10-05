import React from "react";
import useMusicPlayer from "../hooks/usePlayerProvider";
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseIcon from '@mui/icons-material/Pause';
import './../App.css';

function Controller() {
  const {
    currentTrackIndex,
    isPlaying,
    playTrack,
    playPreviousTrack,
    playNextTrack,
  } = useMusicPlayer();

  const handleTogglePlay = () => {
    if (currentTrackIndex) {
      playTrack(currentTrackIndex);
    } else {
      playTrack(0);
    }
  };

  const handlePlayPreviousTrack = () => {
    playPreviousTrack();
  };

  const handlePlayNextTrack = () => {
    playNextTrack();
  };

  return (
    <div className="controller" >
      <div className="controller_button">
        <button  onClick={handlePlayPreviousTrack}>
          <SkipPreviousIcon className="prevNext-button"/>
        </button>

        <button  onClick={handleTogglePlay} >

            {isPlaying ? (
              <PauseIcon className="play-button"/>
            ) : (
              <PlayCircleIcon className="play-button"/>
            )}
        </button>

        <button  onClick={handlePlayNextTrack}>
        <SkipNextIcon className="prevNext-button"/>
        </button>
      </div>
    </div>
  );
}

export default Controller;