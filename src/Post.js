import { Avatar } from '@mui/material'
import React from 'react'
import "./Post.css"
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

const Post = ({displayName, username, verified, timestamp, text, image, avatar}) => {
  return (
    <div className='post'>
        <div className="post_avatar">
            <Avatar/>
        </div>
        <div className='post_body'>
            <div className="post_header">
                <div className="post_headerText">
                    <h3>
                        Ofir Efraim 
                        <span className='post_headerSpecial'>
                            <VerifiedUserIcon className="post_badge"/>
                            @ofirefraim
                        </span>
                    </h3>
                </div>
                <div className="post_headerDescription">
                    <p>I challange you</p>
                </div>
                <img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="a pictur" />
                <div className="post_footer">
                <ChatBubbleOutlineIcon fontSize="small" />
                <RepeatIcon fontSize="small" />
                <FavoriteBorderIcon fontSize="small" />
                <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post