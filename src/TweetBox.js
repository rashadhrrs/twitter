import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import "./TweetBox.css";
import db from "./firebase";
import M from 'moment'
import firebase from "firebase"


function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: firebase.auth().currentUser.displayName,
      userName: firebase.auth().currentUser.email,
      text: tweetMessage,
      timestamp: M().format("DD-MM-YYYY HH:mm:ss")
    });

    setTweetMessage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox-input">
          <Avatar src={firebase.auth().currentUser.photoURL} />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          ></input>
        </div>
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox-tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
