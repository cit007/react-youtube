import React, { useEffect, useContext } from "react";
import { youtubeApi } from "../../apis/apis";
import { Store } from "../../store/index";
import VideoSideListItem from "../VideoSideListItem/VideoSideListItem";
import Style from "./VideoSideList.module.scss";

const VideoSideList = () => {
  const { globalState, setGlobalState } = useContext(Store);
  useEffect(() => {
    const {
      detail: { id },
    } = globalState;
    console.log("VideoSideList:", id);
    youtubeApi.relatedVideo(id).then((res) => {
      console.log("VideoSideList get data:", res);
      const {
        data: { items },
      } = res;
      setGlobalState({ type: "SET_RELATED", payload: { side: items } });
    });
  }, [globalState.detail]);

  return (
    <div className={Style.wrap}>
      {globalState.side ? (
        globalState.side.map((item) => {
          return (
            item.id &&
            item.id.videoId && (
              <VideoSideListItem
                id={item.id.videoId}
                key={item.id.videoId}
                thumbnails={item.snippet.thumbnails.medium.url}
                title={item.snippet.title}
              />
            )
          );
        })
      ) : (
        <div>No Data</div>
      )}
    </div>
  );
};

export default VideoSideList;
