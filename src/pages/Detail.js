import React, { useEffect, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import VideoDetail from "../components/VideoDetail/VideoDetail";
import VideoSideList from "../components/VideoSideList/VideoSideList";
import { Store } from "../store/index";
import { youtubeApi } from "../apis/apis";
import Loader from "../components/Loader/Loader";
import Notice from "../components/Notice/Notice";

const Detail = () => {
  const { globalState, setGlobalState } = useContext(Store);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const location = useLocation();
  console.log("Detail:", location);

  const fetchDetailData = async () => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("v");

    try {
      if (id) {
        const [
          {
            data: { items: selected },
          },
          {
            data: { items: related },
          },
        ] = await Promise.all([
          youtubeApi.detailVideo(id),
          youtubeApi.relatedVideo(id),
        ]);

        console.log("detail result:", selected);
        console.log("detail result:", related);

        setGlobalState({
          type: "SET_DETAIL",
          payload: { detail: selected ? selected[0] : "" },
        });

        setGlobalState({ type: "SET_RELATED", payload: { side: related } });
      }
    } catch {
      setError("fetch data error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetailData();
  }, [location.search]);

  return (
    <Layout>
      {loading ? <Loader /> : globalState.detail && <VideoDetail />}
      {loading ? <Loader /> : globalState.side && <VideoSideList />}
    </Layout>
  );
};

export default Detail;
