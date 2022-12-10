import {
  AppBar,
  Box,
  Button,
  CardMedia,
  Divider,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  SwipeableDrawer,
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
          height: 60,
          '&.Mui-selected': {
            color: 'white',
            borderBottom: 'solid white 1.5px',
          },
        }}
      >
        <Typography
          component='h3'
          variant='subtitle2'
          sx={[
            {
              p: { xs: 0, md: 2 },
              color: 'white',
              '&:hover': {
                borderBottom:
                  linkData[index] !== location.pathname && 'solid grey 1.5px',
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
    <Link to={linkData[index]} key={item} onClick={() => setAnchorEl(null)}>
      <ListItem>
        <ListItemText>
          <Typography variant='caption' component='h3' sx={{ color: 'white' }}>
            {item}
          </Typography>
        </ListItemText>
      </ListItem>
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
        {!open && <CardMedia image={dropdown} sx={{ width: 26, height: 26 }} />}
      </Button>
      <SwipeableDrawer
        anchor='right'
        open={open}
        onClose={() => setAnchorEl(null)}
        onOpen={() => setAnchorEl(true)}
        sx={{
          '& .MuiDrawer-paper': {
            backdropFilter: 'blur(40px)',
            backgroundColor: 'transparent',
          },
        }}
      >
        <List>
          <CardMedia
            image={dropup}
            sx={{ width: 26, height: 26, mb: 4, mr: 2, ml: 'auto', mt: 1 }}
            onClick={() => setAnchorEl(null)}
          />
          {inputSmall}
        </List>
      </SwipeableDrawer>
    </>
  );

  return (
    <AppBar position='static' sx={{ mb: 3, background: 'none', boxShadow: 0 }}>
      <Toolbar variant='regular' sx={{ justifyContent: 'space-between' }}>
        <Link to='/'>
          <CardMedia image={logo} sx={{ width: 48, height: 48, margin: 1 }} />
        </Link>
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
