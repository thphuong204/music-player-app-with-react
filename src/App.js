import './App.css';
import Controller from './components/Controller';
import TrackList from './components/TrackList';
import ShowingCurrentSong from './components/ShowingCurrentSong';
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";


function App() {
  return (
    <MusicPlayerProvider>
      <div className="container" >
        <div className="app">
        <ShowingCurrentSong/>
        <TrackList className="trackList"/>
        <Controller />
        </div>
      </div>
    </MusicPlayerProvider>
  );
}

export default App;
