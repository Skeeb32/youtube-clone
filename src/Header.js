import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';


function Header() {
  return (
    <div class Name="header">
      <h1>I am a header</h1>
      <MenuIcon />
      <img
        className="header__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1024px-Logo_of_YouTube_%282015-2017%29.svg.png"
        alt=""
      />
      <input type="text" />
      <SearchIcon />
      <VideoCallIcon />
      <AppsIcon />
      <NotificationsIcon />
      <Avatar 
      alt="Shaqib Habib"
      src="https://avatars0.githubusercontent.com/u/55864051?s=400&u=d17ca8209ac548d3d3033ddbe93f9741b7123263&v=4"
      />
    </div>
  );
}

export default Header;
