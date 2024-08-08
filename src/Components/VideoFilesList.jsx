import React, {useRef, useEffect, useState} from 'react'
import searchHttp from '../Functions/HttpSearch';
import FetchUsers from '../Functions/HttpSearch';
import VideoPlayer from './VideoPlayer';

import axios from "axios";


const VideoFilesList = () =>{
    const [files, setFiles] = useState([]);
    const [videoId, setVideoId] = useState(null);

      function playVideo(e, videoId){
        e.preventDefault();
        setVideoId(videoId);
      }

      const getFiles = async() => {
        let response = await axios.get(
            "http://antares.ninja:3005/videoFiles");
            setFiles(response.data)    
      }

      useEffect(() => {
        getFiles();
      }, [])


    return (
      <div>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <VideoPlayer videoId={videoId}></VideoPlayer>
        </div>
        
          
        <div style={{padding:'50px', border:'20px'}}>
          { files.map( (file) => <div><button style={{width:'100%'}} key={file} onClick={(e) =>{playVideo(e, file)}}>{file}</button></div>) }
        </div>
      </div>
      )
}

export default VideoFilesList;

