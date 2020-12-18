import React, { useEffect, useContext, useState } from "react";
import Layout from "../components/Layout/Layout";
import { youtubeApi } from "../apis/apis";
import { Store } from "../store/index";
import VideoGrid from "../components/VideoGrid/VideoGrid";
import VideoGridItem from "../components/VideoGridItem/VideoGridItem";
import Loader from "../components/Loader/Loader";
import Notice from "../components/Notice/Notice";

const Main = () => {
  const { globalState, setGlobalState } = useContext(Store);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const {
        data: { items },
      } = await youtubeApi.popularVideo();

      setGlobalState({ type: "SET_POPULAR", payload: { popular: items } });
    } catch {
      setError("fetch data error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <VideoGrid>
        {loading ? (
          <Loader />
        ) : (
          globalState.popular &&
          globalState.popular.map((item) => {
            console.log("each item", item);
            return (
              <VideoGridItem
                id={item.id}
                key={item.id}
                thumbnails={item.snippet.thumbnails.standard.url}
                title={item.snippet.title}
              />
            );
          })
        )}
        {error && <Notice message={error} />}
      </VideoGrid>
    </Layout>
  );
};

export default Main;
