import React from "react";
import Style from "./VideoSideListItem.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const VideoSideListItem = ({ id, title, thumbnails, channel }) => {
  console.log("VideoSideListItem :", id, title, thumbnails);
  return (
    <Link
      to={{ pathname: "detail", search: `?v=${id}` }}
      className={Style.item}
    >
      <div className={Style.wrap}>
        <img src={thumbnails} alt={title} />
      </div>
      <p>
        {title} <br />
        {channel}
        <FontAwesomeIcon icon={faCheckCircle} />
      </p>
    </Link>
  );
};

export default VideoSideListItem;
