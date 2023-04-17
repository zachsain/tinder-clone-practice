import React from 'react'
import Person2Icon from '@mui/icons-material/Person2';
import ForumIcon from '@mui/icons-material/Forum';
import "./Header.css"


function Header() {
  return (
    <div className="header">
        <Person2Icon />
        <h3>header</h3>
        <ForumIcon />

    </div>
  )
}

export default Header