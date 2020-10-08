import React from 'react'
import "./Feed.css"
import TweetBox from './TweetBox'
import Post from './Post'

function Feed() {
    return (
        <div className="feed">
            {/* Header */}
            <div className="feed-header">
                <h2>Home</h2>
            </div>

            {/* Tweet Box */}
            <TweetBox />

            {/* Post */}
            <Post
            displayName="Rashad Harris"
            userName="@rashadhrrs"
            text="just a tweet"
            />
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
            
        </div>
    )
}

export default Feed
