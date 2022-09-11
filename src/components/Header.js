import React from "react";
import '../styles/header.css'
import logo from '../assets/logo.png'
import { Reorder } from "@mui/icons-material";
import Search from './Search';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useGlobalContext } from '../warehouse/context'
import Provider from "../firebase";
import { auth } from '../firebase';

function Header() {
  const { currVal, searchInput, dispatch, profilePic } = useGlobalContext();
  console.log(profilePic)

  const authHandler = () => {
    auth.signInWithPopup(Provider).then((result) => {
      const URL = result.user.photoURL;
      dispatch({ type: "USERPIC", payload: URL })
    }).catch((e) => {
      console.log(e);
    })
  }



  function clickHandler() {
    dispatch({ type: "USER_SEARCH", payload: currVal })
  }
  return (
    <header className="header-section">
      <div className="header-img-conatiner">
        <Reorder sx={{ marginLeft: '0.8rem' }} />
        <img src={logo} alt="" />
      </div>
      <div className="search-box">
        <Search />
        <div className="search-icon" onClick={clickHandler}>
          <SearchIcon sx={{ cursor: 'pointer' }} />
        </div>
        <div className="mic-icon">
          <MicIcon />
        </div>
      </div>
      <div className="header-right">
        <VideoCallIcon />
        <NotificationsIcon />
        {!profilePic ? <AccountCircleIcon onClick={authHandler} sx={{ cursor: 'pointer' }} /> : <img src={profilePic} alt="user" className="user-pic" />}

      </div>
    </header>
  );
}

export default Header;
