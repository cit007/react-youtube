import React, { useEffect, useContext } from 'react'
import Layout from "../components/Layout/Layout"
import {youtubeApi} from "../apis/apis"
import {Store} from '../store/index'

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
            Main
        </Layout>
    )
}

export default Main
