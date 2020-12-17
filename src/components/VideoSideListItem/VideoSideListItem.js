import React from "react";
import Style from "./VideoSideListItem.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const VideoSideListItem = ({ id, title, thumbnails, channel }) => {
  console.log("VideoSideListItem :", id, title, thumbnails);
  return (
    <div className={Style.item}>
      <Link to={{ pathname: "detail", search: `?v=${id}` }}>
        <div className={Style.wrap}>
          <img src={thumbnails} alt={title} />
        </div>
        <div>
          <ul>
            <li>{title}</li>
            <li>
              {channel} <FontAwesomeIcon icon={faCheckCircle} />
            </li>
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default VideoSideListItem;
