import React, {useRef, useEffect} from 'react'

const MusicPlayer = ({musicId}) =>{
    const musicRef = useRef(null)
    useEffect(()=>{
        if(musicRef.current){

        }
    })

    return (
        <audio src={'http://antares.ninja:3005/music/'+musicId} controls autoPlay>
            Error when playing
        </audio>
    )
}

export default MusicPlayer;