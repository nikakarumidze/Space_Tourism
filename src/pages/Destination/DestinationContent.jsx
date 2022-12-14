import {
  Box,
  CardMedia,
  Divider,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

const buttonInput = ['moon', 'mars', 'europa', 'titan'];

const DestinationContent = (props) => {
  const [current, setCurrent] = useState('moon');
  const currentChanger = (e, clickedVal) => {
    if (clickedVal) {
      setCurrent(clickedVal);
      props.onSelect(clickedVal);
    }
  };
  const toggleButtons = buttonInput.map((item) => (
    <ToggleButton
      value={item}
      key={item}
      sx={{
        mx: 1,
        color: 'white',
        border: 'none',
        borderRadius: 0,
        '&:hover': {
          borderBottom: 'solid grey 0.7px',
        },
        '&.Mui-selected': {
          color: 'white',
          borderBottom: 'solid white 1px',
        },
      }}
    >
      <Typography variant='caption'>{item.toUpperCase()}</Typography>
    </ToggleButton>
  ));
  return (
    <Grid container sx={{ m: 0 }}>
      <Grid container item xs={12} md={5} justifyContent='center'>
        <CardMedia
          component='img'
          image={props.image}
          alt='Place for content image'
          sx={{
            width: { xs: '50%', md: '80%' },
            height: '80%',
            objectFit: 'contain',
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          display='flex'
          flexDirection='column'
          alignItems={{ xs: 'center', md: 'start' }}
          sx={{ mx: { xs: '80px !important', md: '0 !important' } }}
        >
          <ToggleButtonGroup
            value={current}
            exclusive
            onChange={currentChanger}
            sx={{ boxSizing: 'border-box', height: 50 }}
          >
            {toggleButtons}
          </ToggleButtonGroup>
          <Typography component='h1' variant='h2' sx={{ color: 'white' }}>
            {current.toUpperCase()}
          </Typography>
          <Typography sx={{ my: 2, color: 'secondary.main' }}>
            {props.description}
          </Typography>
        </Box>
        <Divider sx={{ background: '#383B4B' }} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-around',
            alignItems: 'center',
            mt: 3,
            mb: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              mb: { xs: 2, sm: 0 },
            }}
          >
            <Typography variant='subtitle2' sx={{ color: 'secondary.main' }}>
              AVG. DISTANCE
            </Typography>
            <Typography variant='subtitle1' sx={{ color: 'white' }}>
              {props.distance}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant='subtitle2' sx={{ color: 'secondary.main' }}>
              EST. TRAVEL TIME
            </Typography>
            <Typography variant='subtitle1' sx={{ color: 'white' }}>
              {props.travelTime}
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DestinationContent;
