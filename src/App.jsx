import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  const videoRef = useRef(null);

  const imageRef = useRef(null);

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setTime(0);
  };

  const handleMouseEnter = () => {
    imageRef.current.style.transform = "scale(1.5)";
  };

  const handleMouseLeave = () => {
    imageRef.current.style.transform = "scale(1)";
  };

  const playVideo = () => {
    videoRef.current.play();
  };

  const pauseVideo = () => {
    videoRef.current.pause();
  };

  return (
    <div className="App">
      <div className="timer-section">
        <h1>Timer: {time}s</h1>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>

      <div className="image-section">
        <h1>Hover to Zoom</h1>
        <img
          ref={imageRef}
          src="./assets/honor.png"
          alt="Zoomable"
          className="zoom-image"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>

      <div className="video-section">
        <h1>Custom Video Controls</h1>
        <video
          ref={videoRef}
          width="600"
          controls={false}
          src="https://www.w3schools.com/html/mov_bbb.mp4"
        />
        <br />
        <button onClick={playVideo}>Play</button>
        <button onClick={pauseVideo}>Pause</button>
      </div>
    </div>
  );
}

export default App;
