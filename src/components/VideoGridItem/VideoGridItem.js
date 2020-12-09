import React from 'react'
import Style from "./VideoGridItem.module.scss"
import {Link} from "react-router-dom"

const VideoGridItem = ({id,title,thumbnails}) => {
    console.log("VideoGridItem :", id, title, thumbnails)
    return (
        <Link to={{pathname:"detail", search:`?v=${id}`}} className={Style.item}>
            <div>
                <img src={thumbnails} alt={title} />
                <span>{title}</span>
            </div>
        </Link>
       
    )
}

export default VideoGridItem
