import React, {useRef, useEffect} from 'react'

const VideoPlayer = ({videoId}) =>{
    const videoRef = useRef(null)
    useEffect(()=>{
        if(videoRef.current){
            videoRef.current.pause()
            videoRef.current.removeAttribute('src')
            videoRef.current.load()
        }
    })

    return (
        <video ref={videoRef} width='800' height='400' controls autoPlay>
            <source src={'http://localhost:3005/videos/'+videoId} type='video/mp4'></source>
            Error when playing
        </video>
    )
}

export default VideoPlayer;