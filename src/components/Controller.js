import React from "react";
import useMusicPlayer from "../hooks/usePlayerProvider";
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseIcon from '@mui/icons-material/Pause';

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
    <div className="controller">
      <button onClick={handlePlayPreviousTrack}>
        <SkipPreviousIcon/>
      </button>

      <button onClick={handleTogglePlay}>
          {isPlaying ? (
            <PauseIcon/>
          ) : (
            <PlayCircleIcon/>
          )}
      </button>

      <button onClick={handlePlayNextTrack}>
      <SkipNextIcon/>
      </button>
    </div>
  );
}

export default Controller;