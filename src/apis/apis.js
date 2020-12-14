import axios from "axios";

const api = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    key: process.env.REACT_APP_API_KEY,
  },
});

const commonParams = {
  part: "snippet",
  maxResults: 5,
  regionCode: "JP",
  type: "video",
};

export const youtubeApi = {
  popularVideo: async () =>
    await api.get("videos", {
      params: {
        ...commonParams,
        chart: "mostPopular",
      },
    }),
  detailVideo: async (id) =>
    await api.get("videos", {
      params: {
        ...commonParams,
        id,
      },
    }),
  relatedVideo: async (id) =>
    await api.get("/search", {
      params: {
        ...commonParams,
        relatedToVideoId: id,
      },
    }),
};
