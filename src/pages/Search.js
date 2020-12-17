import React, { useEffect, useContext } from "react";
import Layout from "../components/Layout/Layout";
import { useLocation } from "react-router-dom";
import { youtubeApi } from "../apis/apis";
import { Store } from "../store/index";
import VideoGrid from "../components/VideoGrid/VideoGrid";
import VideoGridItem from "../components/VideoGridItem/VideoGridItem";

const Search = () => {
  const { globalState, setGlobalState } = useContext(Store);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const term = searchParams.get("query");
    // console.log(location.search, query);

    youtubeApi.searchVideo(term).then((res) => {
      const {
        data: { items },
      } = res;
      console.log(items);

      setGlobalState({ type: "SET_SEARCH", payload: { search: items } });
    });
  }, []);

  return (
    <Layout>
      <VideoGrid>
        {
          // console.log("setGlobalState after",globalState)
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
        }
      </VideoGrid>
    </Layout>
  );
};

export default Search;
