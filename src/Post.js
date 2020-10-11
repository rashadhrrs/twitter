import React, { forwardRef } from 'react';
import "./Post.css";
import {Avatar} from "@material-ui/core";
import { VerifiedUser } from '@material-ui/icons';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline"
import RepeatIcon from "@material-ui/icons/Repeat"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import PublishIcon from "@material-ui/icons/Publish"
import firebase from "firebase"


const Post = forwardRef(({
    // avatar,
    // displayName,
    // userName,
    text
}, ref) =>  {
    return (
        <div className="post" ref={ref}>
            <div className="post-avatar">
                <Avatar src={firebase.auth().currentUser.photoURL}/>
            </div>
            <div className="post-body">
                <div className="post-header">
                    <div className="post-headerText">
                        <h3>
                            {firebase.auth().currentUser.displayName} {" "}
                            <span className="post-headerSpecial">
                                <VerifiedUser className="post-badge"/>
                                @{(firebase.auth().currentUser.email).replace("@gmail.com", "")}
                            </span>
                        </h3>
                    </div>
                    <div className="post-headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                
                <div className="post-footer">
                        <ChatBubbleOutlineIcon fontSize="small"/>
                        <RepeatIcon fontSize="small"/>
                        <FavoriteBorderIcon fontSize="small"/>
                        <PublishIcon fontSize="small"/>
                    </div>
            </div>
        </div>
    )
})

export default Post
