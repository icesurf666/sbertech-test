import React from 'react';
import {MenuItem, Menu, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {Link as RouteLink} from "react-router-dom";

export default function MenuApp() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Меню
      </Button> */}
      <IconButton edge="start" onClick={handleClick} color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} component={RouteLink} to='/'>Список сотрудников</MenuItem>
        <MenuItem onClick={handleClose} component={RouteLink} to='/add'>Добавить запись</MenuItem>
        <MenuItem onClick={handleClose} component={RouteLink} to='/options'>Настройки</MenuItem>
      </Menu>
    </div>
  );
}