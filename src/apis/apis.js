import axios from "axios";

const api = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params:{
        key: process.env.REACT_APP_API_KEY
    }
})

export const youtubeApi = {
    popularVideo: async () => 
        await api.get("videos", {
            params: {
                part: "snippet",
                maxResults: 100,
                regionCode: "JP",
                chart: "mostPopular"
            }
        })
}