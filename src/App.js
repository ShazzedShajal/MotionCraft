import { useState } from 'react';
import{ createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
import './App.css';

const VideoCompressor = () => {
    const [videoSrc, setVideoSrc] = useState("");
    const [videoFile, setVideoFile] = useState({});
    const [compressedVideoUrl, setCompressedVideoUrl] = useState("");
    const ffmpeg = createFFmpeg({ log: true });
  
    const handleChangeVideo = (e) => {
      const file = e.target.files[0];
      setVideoFile(file);
      setVideoSrc(URL.createObjectURL(file));
    }
  
    const compressVideo = async () => {
      await ffmpeg.load();
      ffmpeg.FS('writeFile', 'input_video.mp4', await fetchFile(videoFile));
  
      // Set the desired output video width (e.g., 640)
      const outputWidth = 640;
  
      await ffmpeg.run(
        '-i', 'input_video.mp4',
        '-vf', `scale=${outputWidth}:-1`,
        'output_video.mp4'
      );
  
      const data = ffmpeg.FS('readFile', 'output_video.mp4');
      const compressedVideoUrl = URL.createObjectURL(new Blob([data.buffer], { type: 'video/mp4' }));
      setCompressedVideoUrl(compressedVideoUrl);
  
      // Clean up the temporary files
      ffmpeg.FS('unlink', 'input_video.mp4');
      ffmpeg.FS('unlink', 'output_video.mp4');
    };
  
    return (
      <div>
        <h2>Video Compressor</h2>
        <input type="file" accept="video/*" onChange={handleChangeVideo} />
        {videoSrc && (
          <div style={{ width: '100%', overflowX: 'auto' }}>
            <video src={videoSrc} controls style={{ width: '100%' }} />
            <button onClick={compressVideo}>Compress Video</button>
          </div>
        )}
        {compressedVideoUrl && (
          <div>
            <h3>Compressed Video</h3>
            <video src={compressedVideoUrl} controls />
            <a href={compressedVideoUrl} download="compressed_video.mp4">Download Compressed Video</a>
          </div>
        )}
      </div>
    );
  };
  
  
  export default VideoCompressor;
  