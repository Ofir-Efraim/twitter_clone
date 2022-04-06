import React from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@mui/material'

const TweetBox = () => {
  return (
    <div className="tweetBox">
        <form>
            <div className="tweetBox_input">
                <Avatar></Avatar>
                <input type="text" placeholder="What's happening?"></input>
            </div>
            <input type="text" className='tweetBox_imageInput' placeholder='Enter image URL'></input>
            <Button className='tweetBox_button'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox