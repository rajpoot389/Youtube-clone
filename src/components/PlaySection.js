import React from 'react'
import Header from './Header';
import SideIcons from './SideIcons';
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../warehouse/context';
import { NavLink } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../styles/play.css'

const PlaySection = () => {
    let { id } = useParams();
    const { content } = useGlobalContext();

    console.log(content);
    return (
        <div className="play-section">
            <Header />
            <div className='play-container'>
                <div className="play-sideIcons">
                    <SideIcons />
                </div>
                <div className="play-content">
                    <div className="player">
                        <iframe
                            id="ytplayer"
                            className='play'
                            type="text/html"
                            width="100%"
                            height="360"
                            src={`https://www.youtube.com/embed/${id}?autoplay=0&origin=http://example.com&controls=0&rel=1`}
                            frameBorder="0"
                            controls='0'
                        ></iframe>
                    </div>

                    <div className="play-side-content">
                        {content.map((video) => {
                            let id = video.id.videoId;
                            return (
                                <NavLink to={`/video/${id}`} style={{ textDecoration: "none" }}>
                                    <div className="video-card2" >
                                        <img src={video.snippet.thumbnails.medium.url} />
                                        <div className="card-container2">
                                            {/* <AccountCircleIcon /> */}
                                            <p style={{ textDecoration: 'none' }}>{video.snippet.title.length >= 70 ? video.snippet.title.slice(0, 69) + '...' : video.snippet.title}</p>
                                        </div>
                                    </div>
                                </NavLink>
                            )
                        })}
                    </div>
                </div>

            </div>
        </div>

    )
}

export default PlaySection