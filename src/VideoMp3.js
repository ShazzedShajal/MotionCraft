import { useState } from 'react';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
import './App.css';

function VideoMp3() {
  const [videoSrc, setVideoSrc] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [audioFile, setAudioFile] = useState(null);
  const ffmpeg = createFFmpeg({ log: true });

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    setVideoFile(file);
  }

  const handleAudioChange = (e) => {
    const file = e.target.files[0];
    setAudioFile(file);
  }

  const addAudioToVideo = async () => {
    if (!videoFile || !audioFile) {
      alert("Please select both a video and an audio file.");
      return;
    }

    try {
      await ffmpeg.load();
      ffmpeg.FS('writeFile', 'input.mp4', await fetchFile(videoFile));
      ffmpeg.FS('writeFile', 'audio.mp3', await fetchFile(audioFile));

      // Merge the audio and video files
      await ffmpeg.run('-i', 'input.mp4', '-i', 'audio.mp3', '-c:v', 'copy', '-c:a', 'aac', '-strict', 'experimental', '-shortest', 'output.mp4');

      const data = ffmpeg.FS('readFile', 'output.mp4');
      setVideoSrc(URL.createObjectURL(new Blob([data.buffer], { type: 'video/mp4' })));
    } catch (error) {
      console.error("Error adding audio to video:", error);
      alert("Error adding audio to video. Please try again.");
    }
  }

  return (
    <div className="App">
      <video src={videoSrc} controls></video>
      <br/><br/>
      <label htmlFor="sound" className="custom-input-button">
      Insert Video File
    </label>
    <input type="file" id="video" accept="video/*" onChange={handleVideoChange}></input>
      <p></p>

      <label htmlFor="sound" className="custom-input-button">
      Insert Audio File
    </label>
      <input type="file" id="audio" accept="audio/*" onChange={handleAudioChange}></input>
      <p></p>
      <button onClick={addAudioToVideo} className="custom-input-buttonGo">Make the Video</button>
    </div>
  );
}

export default VideoMp3;
