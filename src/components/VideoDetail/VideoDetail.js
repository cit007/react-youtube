import React, { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { youtubeApi } from "../../apis/apis";
import { Store } from "../../store/index";
import VideoPlay from "../VideoPlay/VideoPlay";
import Style from "./VideoDetail.module.scss";
import Linkify from "react-linkify";

const VideoDetail = () => {
  const { globalState, setGlobalState } = useContext(Store);
  const location = useLocation();
  console.log("VideoDetail:", location);

  useEffect(() => {
    //parse search param value : detail?v=o2bXOyyGe7c
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("v");
    console.log("id:", id);

    youtubeApi
      .detailVideo(id)
      .then((res) => {
        console.log("fetchDetailVideo :", res);

        // const item = res.data.items.shift()
        const {
          data: { items },
        } = res;
        console.log("fetchDetailVideo item:", items[0]);
        setGlobalState({
          type: "SET_DETAIL",
          payload: { detail: items ? items[0] : "" },
        });
      })
      .catch((err) => alert(err));
  }, [location.search]);

  return (
    <div className={Style.wrap}>
      {globalState.detail && globalState.detail.id ? (
        <div>
          <VideoPlay id={globalState.detail.id} />
          <p>{globalState.detail.snippet.title}</p>
          <hr />
          <pre>
            <Linkify>{globalState.detail.snippet.description}</Linkify>
          </pre>
        </div>
      ) : (
        <div>No Data</div>
      )}
    </div>
  );
};

export default VideoDetail;
