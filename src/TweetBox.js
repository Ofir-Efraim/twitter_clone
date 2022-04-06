import React, { useState } from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@mui/material'
import db from './firebase';

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const sendTweet = e => {
    e.preventDefault();
    setTweetMessage('');
    setImgUrl('');
    db.collection('posts').add({
      displayName: 'Ofir Efraim',
      username: 'ofirefraim',
      verified:true,
      text: tweetMessage,
      image: imgUrl
    });
  }
  return (
    <div className="tweetBox">
        <form>
            <div className="tweetBox_input">
                <Avatar></Avatar>
                <input onChange={e => setTweetMessage(e.target.value)} value={tweetMessage}type="text" placeholder="What's happening?"></input>
            </div>
            <input onChange={e => setImgUrl(e.target.value)} value={imgUrl} type="text" className='tweetBox_imageInput' placeholder='Enter image URL'></input>
            <Button onClick={sendTweet} type='submit' className='tweetBox_button'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox