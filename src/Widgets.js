import React from 'react';
import './Widgets.css';
import SearchIcon from '@mui/icons-material/Search'
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

const Widgets = () => {
  return (
    <div className='widgets'>
      <div className="widgets_input">
        <SearchIcon className='widgets_searchIcon'></SearchIcon>
        <input type="text" placeholder='Search Twitter' />
      </div>
      <div className="widgets_widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1050118621198921728"} />

        <TwitterTimelineEmbed
        sourceType='profile'
        screenName="twitter"
        options={{ height : 400}}
        />

        <TwitterShareButton
        />
      </div>
    </div>
  )
}

export default Widgets