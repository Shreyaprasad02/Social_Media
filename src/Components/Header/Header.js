import React from 'react'
import './Header.css'
import HeaderOption from '../HeaderOption/HeaderOption';
import Logo from '../../img/logo.png'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from "@material-ui/icons/Home";
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import Description from '@material-ui/icons/Description';
import AssistantIcon from '@material-ui/icons/Assistant';
// import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const Header = () => {
  return (
    <div className = "header">

<div className = "header__left">
        <img src={Logo} alt="" />
      </div>

      <div className = "header__center">
          <Link style={{textDecoration: "none"}} to = '../home'>
          <HeaderOption Icon={HomeIcon} title='Home' />
          </Link>
          <Link style={{textDecoration: "none"}} to = '../chat'>
          <HeaderOption Icon={ChatIcon} title='Messaging'/>
          </Link>
          <Link style={{textDecoration: "none"}} to = '../job'>
          <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
          </Link>
          <HeaderOption Icon={AssistantIcon} title='Assistant'/>
          <Link style={{textDecoration: "none"}} to = '../interview'>
          <HeaderOption Icon={Description} title='Interview Experience'/>
          </Link>
          {/* <HeaderOption Icon={LogoutIcon} title='Me'/> */}
      </div>

      <div className = "header__search" >
          <SearchIcon />
          <input type="text" placeholder="Search" />
      </div>
      
    </div>
  )
}

export default Header
