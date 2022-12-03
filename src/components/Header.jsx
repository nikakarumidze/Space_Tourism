import {
  AppBar,
  Box,
  Button,
  CardMedia,
  Divider,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import logo from '../assets/shared/logo.svg';
import dropdown from '../assets/shared/icon-hamburger.svg';
import dropup from '../assets/shared/icon-close.svg';

const Header = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const menuData = ['00 Home', '01 Destination', '02 Crew', '03 Technology'];

  const inputLarge = menuData.map((item) => (
    <Typography component='h3' variant='caption' key={item} sx={{m:2, color:'white'}}>
      {item}
    </Typography>
  ));
  const inputSmall = menuData.map((item) => (
    <MenuItem key={item} onClick={(e)=> console.log(item,e)}>{item}</MenuItem>
  ));
  const smallScreen = (
    <>
      <Button
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {!open ? (
          <CardMedia
            image={dropdown}
            sx={{ width: 26, height: 26 }}
          />
        ) : (
          <CardMedia
            image={dropup}
            sx={{ width: 26, height: 26 }}
          />
        )}
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {inputSmall}
      </Menu>
    </>
  );

  return (
    <AppBar position='static' sx={{ mb: 4, background: 'none', boxShadow: 0 }}>
      <Toolbar
        variant='regular'
        sx={{ justifyContent: 'space-between' }}
      >
        <CardMedia
          image={logo}
          sx={{ width: 48, height: 48, margin: 1}}
        />
        <Divider orientation='vertical' />
        <Box sx={{ display: { xs: 'none', sm: 'flex', background: 'rgba(255, 255, 255, 0.04)' } }}>{inputLarge}</Box>
        <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>{smallScreen}</Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;