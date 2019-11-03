import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
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
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Меню
      </Button>
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