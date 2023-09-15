import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import VideoTrim from './VideoTrim';
import Navbar from './Navbar';
import Compress from './Compress'
import ImageMp3 from './ImageMp3'
import VideoMp3 from './VideoMp3';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import Homepage from './Homepage';

const router = createBrowserRouter([
  {
    path: "/",
    //element: <Navbar/>,
    children:[
      {
        path: "/",
        element: <Homepage/>,
      },
      {
        path: "/app",
        element: <App/>,
      },
      {
        path: "/videotrim",
        element: <VideoTrim/>,
      },
      {
        path: "/compress",
        element: <Compress/>,
      },
      {
        path: "/image",
        element: <ImageMp3/>,
      },
      {
        path: "/video",
        element: <VideoMp3/>,
      },
    ]
  },
 
]);

 
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
