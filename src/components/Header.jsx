import {
  AppBar,
  Box,
  Button,
  CardMedia,
  Divider,
  List,
  ListItem,
  ListItemText,
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
  const location = useLocation();
  const open = Boolean(anchorEl);

  const menuData = ['00 HOME', '01 DESTINATION', '02 CREW', '03 TECHNOLOGY'];
  const linkData = ['/', '/destination', '/crew', '/technology'];

  const inputLarge = menuData.map((item, index) => (
    <Link
      to={linkData[index]}
      key={item}
      onClick={() => props.onURLChange(linkData[index])}
    >
      <MenuItem
        selected={linkData[index] === location.pathname}
        onClick={() => setAnchorEl(null)}
        sx={{
          boxSizing: 'border-box',
          height: 60,
          p: { xs: 1, md: 2 },
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
    <Link
      to={linkData[index]}
      key={item}
      onClick={() => {
        setAnchorEl(null);
        props.onURLChange(linkData[index]);
      }}
    >
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
        onClick={(e) => setAnchorEl(e.currentTarget)}
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
    <AppBar
      position='sticky'
      sx={{
        mb: 3,
        background: 'none',
        boxShadow: 0,
        backdropFilter: 'blur(2px)',
      }}
    >
      <Toolbar
        variant='regular'
        sx={{
          justifyContent: 'space-between',
          pl: '5px !important',
          pr: '0px !important',
          pt: 1,
        }}
      >
        <Link to='/' onClick={() => props.onURLChange('/')}>
          <CardMedia image={logo} sx={{ width: 48, height: 48, margin: 1 }} />
        </Link>
        <Divider
          sx={{
            backgroundColor: 'grey',
            width: { xs: 0, lg: '35%' },
          }}
        />
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
