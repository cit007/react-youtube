import React, {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import {youtubeApi} from "../../apis/apis"

const VideoDetail = () => {
    const location = useLocation();
    console.log("VideoDetail:", location)
    useEffect( () => {
        //parse search param value : detail?v=o2bXOyyGe7c
        const searchParams = new URLSearchParams(location.search)
        const id = searchParams.get("v")
        console.log("id:", id)

        youtubeApi.detailVideo(id).then(res => {
            console.log("fetchDetailVideo :", res)
        }).catch(err => alert(err))
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default VideoDetail
