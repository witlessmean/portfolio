import React, { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import { CustomMenuItem } from "../../utils/reuseableStyles";
import NavIcon from './NavIcon';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-scroll'



export default function NavMenu() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{marginRight: '4vw'}}>
        <NavIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
       <Link to="technologies" smooth={true} duration={500}><CustomMenuItem onClick={handleClose}>Technologies</CustomMenuItem></Link>
       <Link to="projects" smooth={true} duration={500}> <CustomMenuItem onClick={handleClose}>Projects</CustomMenuItem></Link>
      <Link to="contact" smooth={true} duration={500}> <CustomMenuItem onClick={handleClose}>Contact</CustomMenuItem></Link>
      </Menu>
    </div>
  );
}



















































