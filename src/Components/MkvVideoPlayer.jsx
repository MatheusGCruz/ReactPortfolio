import React, {useRef, useEffect} from 'react'

const MkvVideoPlayer = ({videoId}) =>{
    const videoRef = useRef(null)
    useEffect(()=>{
        if(videoRef.current){
            videoRef.current.pause()
            videoRef.current.removeAttribute('src')
            videoRef.current.load()
        }
    },[])

    return (
        <video ref={videoRef} width='1240' height='1080' controls autoPlay>
            <source src={'http://antares.ninja:3005/mkv-videos/'+videoId} type='video/x-matroska'></source>
            Error when playing
        </video>
    )
}

export default MkvVideoPlayer;