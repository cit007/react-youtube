import React, { useEffect, useContext, useState } from "react";
import Layout from "../components/Layout/Layout";
import { useLocation } from "react-router-dom";
import { youtubeApi } from "../apis/apis";
import { Store } from "../store/index";
import VideoGrid from "../components/VideoGrid/VideoGrid";
import VideoGridItem from "../components/VideoGridItem/VideoGridItem";
import Loader from "../components/Loader/Loader";
import Notice from "../components/Notice/Notice";

const Search = () => {
  const { globalState, setGlobalState } = useContext(Store);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const location = useLocation();

  const fetchData = async () => {
    try {
      const searchParams = new URLSearchParams(location.search);
      const term = searchParams.get("query");

      const {
        data: { items },
      } = await youtubeApi.searchVideo(term);

      setGlobalState({ type: "SET_SEARCH", payload: { search: items } });
    } catch {
      setError("fetch data error");
      setTimeout(() => {
        setError("");
      }, 2000);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [location.search]);

  return (
    <Layout>
      <VideoGrid>
        {loading ? (
          <Loader />
        ) : (
          globalState.search &&
          globalState.search.map((item) => {
            console.log("search each item", item);
            return (
              <VideoGridItem
                id={item.id.videoId}
                key={item.id.videoId}
                thumbnails={item.snippet.thumbnails.medium.url}
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

export default Search;
