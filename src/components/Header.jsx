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
import { Link, useLocation } from 'react-router-dom';

const Header = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const location = useLocation();
  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);

  const menuData = ['00 HOME', '01 DESTINATION', '02 CREW', '03 TECHNOLOGY'];
  const linkData = ['/', '/destination', '/crew', '/technology'];
  const selectChanger = (e, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const inputLarge = menuData.map((item, index) => (
    <Link to={linkData[index]} key={item}>
      <MenuItem
        selected={linkData[index] === location.pathname}
        onClick={(e) => selectChanger(e, index)}
        sx={{
          boxSizing: 'border-box',
          height: 65,
          '&.Mui-selected': {
            color: 'white',
            borderBottom: 'solid white 1.5px',
          },
        }}
      >
        <Typography
          component='h3'
          variant='caption'
          sx={[
            {
              p: 2,
              color: 'white',
              '&:hover': {
                borderBottom: linkData[index] !== location.pathname && 'solid grey 1.5px',
              },
            },
          ]}
        >
          {item}
        </Typography>
      </MenuItem>
    </Link>
  ));
  const inputSmall = menuData.map((item, index) => (
    <Link to={linkData[index]} key={item} onClick={()=>setAnchorEl(null)}>
      <MenuItem>
        <Typography variant='caption' component='h3' sx={{color: 'white'}}>
          {item}
        </Typography>
      </MenuItem>
    </Link>
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
          <CardMedia image={dropdown} sx={{ width: 26, height: 26 }} />
        ) : (
          <CardMedia image={dropup} sx={{ width: 26, height: 26 }} />
        )}
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {inputSmall}
      </Menu>
    </>
  );

  return (
    <AppBar position='static' sx={{ mb: 3, background: 'none', boxShadow: 0 }}>
      <Toolbar variant='regular' sx={{ justifyContent: 'space-between' }}>
        <CardMedia image={logo} sx={{ width: 48, height: 48, margin: 1 }} />
        <Divider orientation='vertical' />
        <Box
          sx={{
            display: {
              xs: 'none',
              sm: 'flex',
              background: 'rgba(255, 255, 255, 0.04)',
            },
          }}
        >
          {inputLarge}
        </Box>
        <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>{smallScreen}</Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
