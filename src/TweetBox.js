import { Avatar, Button } from '@material-ui/core'
import React from 'react'
import "./TweetBox.css"

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox-input">
                <Avatar/>
                <input placeholder="What's happening?" type="text"></input>
                </div>
                <Button className="tweetBox-tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
