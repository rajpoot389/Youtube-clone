import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import '../styles/sideIcon.css'

const SideIcons = () => {
    return (
        <div className="sideIcon-container">
            <HomeIcon fontSize='large' />
            <ExploreIcon fontSize='large' />
            <AppShortcutIcon fontSize='large' />
            <SubscriptionsIcon fontSize='large' />
            <VideoLibraryIcon fontSize='large' />
        </div>
    )
}

export default SideIcons