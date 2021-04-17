import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import { CustomMenuItem } from "../../utils/reuseableStyles";
import NavIcon from './NavIcon';

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
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <NavIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <CustomMenuItem onClick={handleClose}>Profile</CustomMenuItem>
        <CustomMenuItem onClick={handleClose}>My account</CustomMenuItem>
        <CustomMenuItem onClick={handleClose}>Logout</CustomMenuItem>
      </Menu>
    </div>
  );
}



















































