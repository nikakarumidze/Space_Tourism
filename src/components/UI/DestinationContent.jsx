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

const DestinationContent = (props) => {
  const [current, setCurrent] = useState('moon');
  const currentChanger = (e, clickedVal) => {
    if (clickedVal) {
      setCurrent(clickedVal)
      props.onSelect(clickedVal);
    }
  };
  const buttonInput = ['moon','mars','europa','titan']
  const toggleButtons = buttonInput.map(item => (
  <ToggleButton value={item} key={item}  sx={{
    mx:1,
    color: 'white',
    border: 'none',
    borderRadius: 0,
    '&:hover': {
    borderBottom: 'solid grey 0.7px',
    },
    '&.Mui-selected': {
      color: 'white',
      borderBottom: 'solid white 1px'
    }
  }}>
    <Typography variant='caption'>
      {item.toUpperCase()}
    </Typography>
  </ToggleButton>
  ))
  return (
    <Grid container spacing={5}>
      <Grid item xs={12} lg={5}>
        <CardMedia
          component='img'
          image={props.image}
          alt='Place for content image'
          sx={{
            width: {
              xs: '170px',
              md: '300px',
              lg:'445px'
            }
          }}
        />
      </Grid>
      <Grid item xs={12} lg={5}>
        <Box>
          <ToggleButtonGroup
            value={current}
            exclusive
            onChange={currentChanger}
            sx={{boxSizing: 'border-box', height: 50}}
          >
            {toggleButtons}
          </ToggleButtonGroup>
          <Typography component='h1' variant='h1' sx={{color:'white'}}>{current.toUpperCase()}</Typography>
          <Typography sx={{my:2, color:'secondary.main'}}>{props.description}</Typography>
        </Box>
        <Divider sx={{background: '#383B4B'}}/>
        <Box sx={{ display: 'flex', flexDirection: {xs: 'column', md:'row'}, justifyContent: 'space-evenly', alignItems: 'center', mt:3 }}>
          <Box sx={{pb: {xs:2, md:0}}}>
            <Typography variant='subtitle2' sx={{color:'secondary.main'}}>AVG. DISTANCE</Typography>
            <Typography variant='subtitle1' sx={{color:'white'}}>{props.distance}</Typography>
          </Box>
          <Box>
            <Typography variant='subtitle2' sx={{color:'secondary.main'}}>EST. TRAVEL TIME</Typography>
            <Typography variant='subtitle1' sx={{color:'white'}}>{props.travelTime}</Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DestinationContent;
