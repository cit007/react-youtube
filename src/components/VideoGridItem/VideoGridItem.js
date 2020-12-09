import React from 'react'
import Style from "./VideoGridItem.module.scss"
import {Link} from "react-router-dom"

const VideoGridItem = ({id,title,thumbnail}) => {
    console.log(title, thumbnail)
    return (
        <Link to={{pathname:"detail", search:`?v=${id}`}} className={Style.item}>
            <div>
                <img src={thumbnail} alt={title} />
                <span>{title}</span>
            </div>
        </Link>
       
    )
}

export default VideoGridItem
