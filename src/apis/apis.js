import axios from "axios";

const api = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    key: process.env.REACT_APP_API_KEY,
  },
});

const commonParams = {
  part: "snippet",
  maxResults: 30,
  regionCode: "JP",
  type: "video",
};

export const youtubeApi = {
  popularVideo: () =>
    api.get("videos", {
      params: {
        ...commonParams,
        chart: "mostPopular",
      },
    }),
  detailVideo: (id) =>
    api.get("videos", {
      params: {
        ...commonParams,
        id,
      },
    }),
  relatedVideo: (id) =>
    api.get("/search", {
      params: {
        ...commonParams,
        relatedToVideoId: id,
      },
    }),
  searchVideo: async (term) =>
    await api.get("/search", {
      params: {
        ...commonParams,
        q: term,
      },
    }),
};
