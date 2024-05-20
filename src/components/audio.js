import React, { useState, useRef } from 'react';

export default function AudioRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState('');
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const handleStartRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);

    mediaRecorderRef.current.ondataavailable = (event) => {
      if (event.data.size > 0) {
        audioChunksRef.current.push(event.data);
      }
    };

    mediaRecorderRef.current.onstop = () => {
      const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/mp3' });
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudioURL(audioUrl);
      audioChunksRef.current = [];
    };

    mediaRecorderRef.current.start();
    setIsRecording(true);
  };

  const handleStopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  };

  return (
    <div className="audio-recorder">
      <div className="recorder">
        <h1 className="title">Voice Recorder</h1>
        <div className="waveform"><canvas width="600" height="160" style={{ width: 600 + "px", height: 160 + "px" }}></canvas></div>
        <button className="link play" >
          <svg aria-hidden="true" width="1em" height="1em" fill="currentColor" stroke=""></svg>
        </button>
        <button className="rec" onClick={isRecording ? handleStopRecording : handleStartRecording}></button>
        <div className="cancel"><button onClick={handleStopRecording}>Cancel</button></div>
        <div className="setting">
          <button className="link">
            <svg aria-hidden="true" width="1.5em" height="1.5em" fill="currentColor" stroke=""></svg>
          </button>
        </div>
        <div className="prompt">
          <div className="timer">{audioURL && (
          <div>
            <h2>Recorded Audio:</h2>
            <audio controls src={audioURL}></audio>
          </div>
        )}</div>
        </div>
      </div>
    </div>
  );
}
