import React, {useEffect, useState} from 'react'
import VideoPlayer from './VideoPlayer';
import MkvVideoPlayer from './MkvVideoPlayer';

import axios from "axios";
import useScreenSize from './../Functions/ScreenSize';



const VideoFilesList = () =>{
    const [files, setFiles] = useState([]);
    const [videoId, setVideoId] = useState(null);
    const screenSize = useScreenSize();

      function playVideo(e, videoId){
        e.preventDefault();
        setVideoId(videoId);
      }

      const getFiles = async() => {
        let response = await axios.get(
            "https://antares.ninja/videoFiles");
            setFiles(response.data)    
      }

      useEffect(() => {
        getFiles();
      }, [])


    return (
      <div>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
          <MkvVideoPlayer videoId={videoId}></MkvVideoPlayer>
        </div>
        
          
        <div style={{padding:.5*screenSize.verticalPadding, border:'20px'}}>
          <div class="listContainer" style={{height:.3*screenSize.height ,overflowY: 'scroll',padding:'10px'}}>
            { files.map( (file) => <div><button style={{width:'100%', fontSize:.8*screenSize.font}} key={file} onClick={(e) =>{playVideo(e, file)}}>{file}</button></div>) }
          </div>
        </div>
      </div>
      )
}

export default VideoFilesList;

