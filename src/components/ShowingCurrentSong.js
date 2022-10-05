import React from "react";
import Box from '@mui/material/Box';
import useMusicPlayer from '../hooks/usePlayerProvider';
import '../App.css';

function ShowingCurrentSong() {
  const { currentTrackName } = useMusicPlayer();

  return (
    <Box className="currentSong">
      <div className="marquee-property">{currentTrackName}</div>
      </Box>
    
  )
}

export default ShowingCurrentSong