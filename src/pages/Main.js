import React, { useEffect } from 'react'
import Layout from "../components/Layout/Layout"
import {youtubeApi} from "../apis/apis"

const Main = () => {
    useEffect(() => {
        youtubeApi.popularVideo().then(res => {
            const {data:{items}} = res;
            console.log(items)
        }).catch(err => alert(err))

    }, [])
    
    return (
        <Layout>
            Main
        </Layout>
    )
}

export default Main
