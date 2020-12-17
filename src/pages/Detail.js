import React, { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import VideoDetail from "../components/VideoDetail/VideoDetail";
import VideoSideList from "../components/VideoSideList/VideoSideList";
import { Store } from "../store/index";
import { youtubeApi } from "../apis/apis";

const Detail = () => {
  const { globalState, setGlobalState } = useContext(Store);
  const location = useLocation();
  console.log("Detail:", location);

  const fetchDetailData = async () => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("v");

    if (id) {
      const result = await Promise.all([
        youtubeApi.detailVideo(id),
        youtubeApi.relatedVideo(id),
      ]);

      // #we can use const [a,b] without using result[0],result[1]
      // const [selectedData, relatedData] = await Promise.all([
      //   youtubeApi.detailVideo(id),
      //   youtubeApi.relatedVideo(id),
      // ]);

      console.log("detail result:", result[0]);
      console.log("detail result:", result[1]);

      const {
        data: { items: selected },
      } = result[0];
      console.log("fetchDetailVideo item:", selected);
      setGlobalState({
        type: "SET_DETAIL",
        payload: { detail: selected ? selected[0] : "" },
      });

      const {
        data: { items: related },
      } = result[1];
      setGlobalState({ type: "SET_RELATED", payload: { side: related } });
    }
  };

  useEffect(() => {
    fetchDetailData();
  }, [location.search]);

  return (
    <Layout>
      <VideoDetail />
      <VideoSideList />
    </Layout>
  );
};

export default Detail;
