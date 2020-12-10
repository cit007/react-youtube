import React from "react";
import Style from "./VideoSideListItem.module.scss";
import { Link } from "react-router-dom";

const VideoSideListItem = ({ id, title, thumbnails }) => {
  console.log("VideoSideListItem :", id, title, thumbnails);
  return (
    <Link
      to={{ pathname: "detail", search: `?v=${id}` }}
      className={Style.item}
    >
      <img src={thumbnails} alt={title} />
      <span>{title}</span>
    </Link>
  );
};

export default VideoSideListItem;
