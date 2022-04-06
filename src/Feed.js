import React, { useEffect, useState } from 'react'
import "./Feed.css"
import TweetBox from './TweetBox'
import Post from './Post'
import db from './firebase'
const Feed = () => {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => doc.data()))
    ))
  },[])
  return (
    <div className="feed">
        <div className="feed_header">
            <h2>Home</h2>
        </div>
        <TweetBox/>
        <Post  text='working'displayName="ofir" username="ofirefra" verified image="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"></Post>
    </div>
  )
}

export default Feed