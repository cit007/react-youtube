import React, { useEffect, useContext } from "react";
import { Store } from "../../store/index";
import VideoSideListItem from "../VideoSideListItem/VideoSideListItem";
import Style from "./VideoSideList.module.scss";

const VideoSideList = () => {
  const { globalState, setGlobalState } = useContext(Store);

  return (
    <div className={Style.wrap}>
      {globalState.side ? (
        globalState.side.map((item) => {
          console.log("VideoSideList :", item);

          return item ? (
            item.id && item.id.videoId && item.snippet && (
              <VideoSideListItem
                id={item.id.videoId}
                key={item.id.videoId}
                thumbnails={item.snippet.thumbnails.medium.url}
                title={
                  item.snippet.title.length < 30
                    ? item.snippet.title
                    : item.snippet.title.substring(0, 30).concat("...")
                }
              />
            )
          ) : (
            <div>No Data</div>
          );
        })
      ) : (
        <div>No Data</div>
      )}
    </div>
  );
};

export default VideoSideList;
