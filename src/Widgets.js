import React from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets-input">
        <SearchIcon className="widget-searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets-widgetsContainer">
        <h2>Whats's happening</h2>
        <TwitterTweetEmbed tweetId={"1308104642384015372"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="twitter"
          option={{ height: 400 }}
        />
      </div>
    </div>
  );
}

export default Widgets;
