import { useState } from 'react';



import{ createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
import './App.css';

// const VideoCompressor = () => {
//   const [videoSrc, setVideoSrc] = useState("");
//   const [videoFile, setVideoFile] = useState({});
//   const [compressedVideoUrl, setCompressedVideoUrl] = useState("");
//   const ffmpeg = createFFmpeg({ log: true });

//   const handleChangeVideo = (e) => {
//     const file = e.target.files[0];
//     setVideoFile(file);
//     setVideoSrc(URL.createObjectURL(file));
//   }

//   const compressVideo = async () => {
//     await ffmpeg.load();
//     ffmpeg.FS('writeFile', 'input_video.mp4', await fetchFile(videoFile));

//     // Set the desired output video width and height (e.g., 640x360)
//     const outputWidth = 640;
//     const outputHeight = 360;

//     await ffmpeg.run(
//       '-i', 'input_video.mp4',
//       '-vf', `scale=${outputWidth}:${outputHeight}`,
//       'output_video.mp4'
//     );

//     const data = ffmpeg.FS('readFile', 'output_video.mp4');
//     const compressedVideoUrl = URL.createObjectURL(new Blob([data.buffer], { type: 'video/mp4' }));
//     setCompressedVideoUrl(compressedVideoUrl);

//     // Clean up the temporary files
//     ffmpeg.FS('unlink', 'input_video.mp4');
//     ffmpeg.FS('unlink', 'output_video.mp4');
//   };

//   return (
//     <div>
//       <h2>Video Compressor</h2>
//       <input type="file" accept="video/*" onChange={handleChangeVideo} />
//       {videoSrc && (
//         <div>
//           <video src={videoSrc} controls />
//           <button onClick={compressVideo}>Compress Video</button>
//         </div>
//       )}
//       {compressedVideoUrl && (
//         <div>
//           <h3>Compressed Video</h3>
//           <video src={compressedVideoUrl} controls />
//           <a href={compressedVideoUrl} download="compressed_video.mp4">Download Compressed Video</a>
//         </div>
//       )}
//     </div>
//   );
// };



////test video upload, small  size output

function ImageMp3() {
  const [videoSrc, setVideoSrc] = useState("");

  const [imageFile, setImageFile] = useState({});
  const [soundFile, setSoundFile] = useState({});
  const ffmpeg = createFFmpeg({
    log: true

  });
  
  
  const handleChangeImage = (e) =>
  {
    const file = e.target.files[0];
    setImageFile(file);
  }

  const handleChangeSound = (e) =>
  {
    const file = e.target.files[0];
    setSoundFile(file);
  }

  const createVideo = async () => {
    await ffmpeg.load();
    ffmpeg.FS('writeFile', 'image.png', await fetchFile(imageFile));
    ffmpeg.FS('writeFile', 'sound.mp3', await fetchFile(soundFile));

    await ffmpeg.run("-framerate", "1/10", "-i", "image.png", "-i", "sound.mp3", "-c:v", "libx264", "-t", "20", "-pix_fmt", "yuv420p", "-vf", "scale=1280:720", "test.mp4");

    const data = ffmpeg.FS('readFile', 'test.mp4');
    setVideoSrc(URL.createObjectURL(new Blob([data.buffer], {type: 'video/mp4'})));


  }
  
  
  return (
    <div className="App">
  <div className="video-container">
    {/* {videoSrc && <video src={videoSrc} controls />} */}
    <video src={videoSrc} controls></video>
  </div>
  <br />
  <div className="input-container">
    <label htmlFor="image" className="custom-input-button">
      Enter image
    </label>
    <input type="file" id="image" accept="image/*" onChange={handleChangeImage} />

    <p></p>

    <label htmlFor="sound" className="custom-input-button">
      Enter music
    </label>
    <input type="file" id="sound" accept="sound/*" onChange={handleChangeSound} />

    <p></p>

    <button onClick={createVideo} className="custom-input-buttonGo">
      Create a video from the things above!
    </button>
    </div> </div>
  );
}


//preious

// return (
//   <div className="App">
//     <video src={videoSrc} controls></video> <br/> <br/>
    
//     <input type="file" id="image" accept="image/*" onChange={handleChangeImage}></input>
//     <p></p>
    
//     <input type="file" id="sound" accept="sound/*" onChange={handleChangeSound}></input>

//     <p></p>

//     <button onClick={createVideo}> Create a video from the things above!</button>




//   </div>
// );     

export default ImageMp3 ;
