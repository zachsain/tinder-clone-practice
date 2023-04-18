import React from 'react'
import Person2Icon from '@mui/icons-material/Person2';
import ForumIcon from '@mui/icons-material/Forum';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { IconButton } from '@mui/material';
import "./Header.css"


function Header() {
  return (
    <div className="header">
        <IconButton> 
            <Person2Icon className="header__icon" fontSize="large"/>
        </IconButton>
        <img 
            className="header__logo"
            src="https://w7.pngwing.com/pngs/698/493/png-transparent-tinder-hd-logo-thumbnail.png" 
            alt="tinder-logo"
        />
        {/* <GroupAddIcon /> */}
        <IconButton>
            <ForumIcon className="header__icon" fontSize="large" />
        </IconButton>
    </div>
  )
}

export default Header