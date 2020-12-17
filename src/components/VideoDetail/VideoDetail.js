import React, { useEffect, useContext } from "react";
import { Store } from "../../store/index";
import VideoPlay from "../VideoPlay/VideoPlay";
import Style from "./VideoDetail.module.scss";
import Linkify from "react-linkify";

const VideoDetail = () => {
  const { globalState, setGlobalState } = useContext(Store);

  return (
    <div className={Style.wrap}>
      {globalState.detail && globalState.detail.id ? (
        <div className={Style.videoContainer}>
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
