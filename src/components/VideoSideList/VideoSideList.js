import React, { useEffect, useContext } from "react";
import Style from "./VideoSideList.module.scss";
import { youtubeApi } from "../../apis/apis";
import { Store } from "../../store/index";

const VideoSideList = () => {
  const { globalState, setGlobalState } = useContext(Store);
  useEffect(() => {
    const {
      detail: { id },
    } = globalState;
    console.log("VideoSideList:", id);
    youtubeApi.relatedVideo(id).then((res) => {
      const {
        data: { items },
      } = res;
      setGlobalState({ type: "SET_RELATED", payload: { side: items } });
    });
  }, []);
  return <div></div>;
};

export default VideoSideList;
