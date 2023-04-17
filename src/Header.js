import React from 'react'
import Person2Icon from '@mui/icons-material/Person2';
import ForumIcon from '@mui/icons-material/Forum';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import "./Header.css"


function Header() {
  return (
    <div className="header">
        <Person2Icon className="header__icon" fontSize="large"/>
        <img 
            className="header__logo"
            src="https://w7.pngwing.com/pngs/698/493/png-transparent-tinder-hd-logo-thumbnail.png" 
            alt="tinder-logo"
        />
        {/* <GroupAddIcon /> */}
        <ForumIcon className="header__icon" fontSize="large" />

    </div>
  )
}

export default Header