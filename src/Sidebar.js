import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import './Sidebar.css'
import SidebarOption from "./SidebarOption"
import TwitterIcon from "@material-ui/icons/Twitter"
import HomeIcon from "@material-ui/icons/Home"
import SearchIcon from "@material-ui/icons/Search"
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder"
import ListAltIcon from "@material-ui/icons/ListAlt"
import PermIdentityIcon from "@material-ui/icons/PermIdentity"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import { Button } from '@material-ui/core'
import firebase from "firebase"
import Login from './Login'



class Sidebar extends Component {
    signOut(){
        // alert("masuk")
        firebase.auth().signOut().then(function(){
            
            return <Redirect to={{ pathname: "/login" }}></Redirect>
        }
        )
    }
    render(){
    return (
   
        <div className="sidebar">
           {/* Twitter icon */}
           <TwitterIcon className="sidebar-twitterIcon" />

           <SidebarOption active Icon={HomeIcon} text="Home"/>
           <SidebarOption Icon={SearchIcon} text="Explore"/>
           <SidebarOption Icon={NotificationsNoneIcon} text="Notifications"/>
           <SidebarOption Icon={MailOutlineIcon} text="Messages"/>
           <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks"/>
           <SidebarOption Icon={ListAltIcon} text="Lists"/>
           <SidebarOption Icon={PermIdentityIcon} text="Profile" href="/" />
           <SidebarOption Icon={MoreHorizIcon} text="More"/>

           {/* Button -> Tweet */} 
           <Button variant="outline" className="sidebar-tweet" fullWidth >Tweet</Button>
           <Button variant="outline" className="sidebar-logout" fullWidth onClick={()=>firebase.auth().signOut()} href={"/"} >Log out</Button>
        </div>
 
   )
}
}

export default Sidebar
