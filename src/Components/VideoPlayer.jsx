import React, {useRef, useEffect} from 'react'
import useScreenSize from './../Functions/ScreenSize';


const VideoPlayer = ({videoId}) =>{
    const videoRef = useRef(null)
    const screenSize = useScreenSize();

    useEffect(()=>{
        if(videoRef.current){
            videoRef.current.pause()
            videoRef.current.removeAttribute('src')
            videoRef.current.load()
        }
    })

    return (
        <video ref={videoRef} width={0.9*screenSize.width} height={0.4*screenSize.height} controls autoPlay>
            <source src={'http://antares.ninja:3005/videos/'+videoId} type='video/mp4'></source>
            Error when playing
        </video>
    )
}

export default VideoPlayer;