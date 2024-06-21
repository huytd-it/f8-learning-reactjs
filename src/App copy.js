
import { useEffect, useRef } from 'react';
import './App.css';
import Video from './useImperativeHandle/Video';


function App() {

  const videoRef = useRef();

  useEffect(function () {
    console.log(videoRef.current);
  })

  const handlePlay = () => {
    videoRef.current.play();
  }
  const handlePause = () => {
    videoRef.current.pause();
  }
  return (
    <div>
      <Video ref={videoRef}></Video>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>

  )


}

export default App;
