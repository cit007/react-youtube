import React, { useEffect, useContext } from 'react'
import Layout from "../components/Layout/Layout"
import {youtubeApi} from "../apis/apis"
import {Store} from '../store/index'
import VideoGrid from "../components/VideoGrid/VideoGrid"
import VideoGridItem from "../components/VideoGridItem/VideoGridItem"
const Main = () => {
    const {globalState, setGlobalState} = useContext(Store);

    useEffect(() => {
        youtubeApi.popularVideo().then(res => {
            const {data:{items}} = res;
            console.log(items)

            setGlobalState({type: "SET_POPULAR", payload:{popular:items}})
        }).catch(err => alert(err))
    }, [])
    
    return (
        <Layout>
            <VideoGrid>
                {
                    // console.log("setGlobalState after",globalState)
                    globalState.popular.map(item => {
                    console.log("each item",item);
                        return (<VideoGridItem
                            id={item.id}
                            key={item.id}
                            thumbnails={item.snippet.thumbnails.standard.url}
                            title={item.snippet.title}
                        />)
                    })
                }
            </VideoGrid>
        </Layout>
    )
}

export default Main
