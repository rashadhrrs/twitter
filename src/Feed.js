import React, {useState, useEffect} from 'react'
import "./Feed.css"
import TweetBox from './TweetBox'
import Post from './Post'
import db from './firebase'
import FlipMove from 'react-flip-move'

function Feed() {
    const [post, setPost] = useState([])

    useEffect(() => {
        db.collection('posts').orderBy("timestamp", "desc").onSnapshot(snapshot => (
            setPost(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])

    return (
        <div className="feed">
            <div className="feed-header">
                <h2>Home</h2>
            </div>

            <TweetBox />

            <FlipMove>
            {post.map(post =>(
                <Post
                key={post.text}
                displayName={post.displayName}
                userName={post.userName}
                text={post.text}
                />
            ) )}
            </FlipMove>
            
        </div>
    )
}

export default Feed
