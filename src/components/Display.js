import React, { useState, useEffect } from "react";
import SideIcons from "./SideIcons";
import { youtubeApi } from "./../apis/youtubeApi";
import { useGlobalContext } from '../warehouse/context';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NavLink } from "react-router-dom";
import '../styles/display.css'

function Display() {
  const { searchInput, dispatch, content } = useGlobalContext();

  useEffect(() => {
    const getVideos = async () => {
      const res = await youtubeApi.get("/search", {
        params: { q: searchInput, },
      });
      dispatch({ type: "CONTENT", payload: res.data.items });
    };
    getVideos()

  }, [searchInput]);


  console.log(content);

  return (
    <div className="main-display">
      <SideIcons />
      <div className="video-grid">
        {content.map((video) => {
          let id = video.id.videoId;
          return (
            <NavLink to={`/video/${id}`} style={{ textDecoration: "none" }}>
              <div className="video-card" >
                <img src={video.snippet.thumbnails.medium.url} />
                <div className="card-container">
                  <AccountCircleIcon />
                  <p style={{ textDecoration: 'none' }}>{video.snippet.title.length >= 70 ? video.snippet.title.slice(0, 69) + '...' : video.snippet.title}</p>
                </div>
              </div>
            </NavLink>
          )
        })}
      </div>
    </div>
  );
}

export default Display;
