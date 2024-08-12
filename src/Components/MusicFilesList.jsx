import React, {useEffect, useState} from 'react'
import MusicPlayer from './MusicPlayer';
import './../Styles/General.css'
import useScreenSize from './../Functions/ScreenSize';

import axios from "axios";


const MusicFilesList = () =>{
    const [files, setFiles] = useState([]);
    const [musicId, setMusicId] = useState(null);
    const screenSize = useScreenSize();

      function playMusic(e, musicId){
        e.preventDefault();
        setMusicId(musicId);
      }

      const getFiles = async() => {
        let response = await axios.get(
            "https://antares.ninja/musicFiles");
            setFiles(response.data)    
      }

      useEffect(() => {
        getFiles();
      }, [])


    return (
      <div>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <MusicPlayer musicId={musicId}></MusicPlayer>
        </div>      
          
        <div style={{padding:'50px', border:'20px'}}>
            <div class="listContainer" style={{height:'50vh',overflowY: 'scroll',padding:'10px'}}>
                { files.map( (file) => <div><button style={{width:'100%', fontSize:.8*screenSize.font}} key={file} onClick={(e) =>{playMusic(e, file)}}>{file}</button></div>) }
            </div>
        </div>
      </div>
      )
}

export default MusicFilesList;