import React, {useEffect, useContext} from 'react'
import {useLocation} from 'react-router-dom'
import {youtubeApi} from "../../apis/apis"
import {Store} from "../../store/index"

const VideoDetail = () => {
    const {globalState, setGlobalState} = useContext(Store)
    const location = useLocation();
    console.log("VideoDetail:", location)

    useEffect( () => {
        //parse search param value : detail?v=o2bXOyyGe7c
        const searchParams = new URLSearchParams(location.search)
        const id = searchParams.get("v")
        console.log("id:", id)

        youtubeApi.detailVideo(id).then(res => {
            console.log("fetchDetailVideo :", res)
            const item = res.data.items.shift()
            setGlobalState({type:"SET_DETAIL", payload:{selected:item}})
        }).catch(err => alert(err))
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default VideoDetail
