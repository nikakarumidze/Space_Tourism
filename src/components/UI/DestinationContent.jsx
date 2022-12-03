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
          >
            <ToggleButton value='moon' variant='caption'>MOON</ToggleButton>
            <ToggleButton value='mars'>MARS</ToggleButton>
            <ToggleButton value='europa'>EUROPA</ToggleButton>
            <ToggleButton value='titan'>TITAN</ToggleButton>
          </ToggleButtonGroup>
          <Typography component='h1' variant='h1' sx={{m:2,color:'white'}}>{current.toUpperCase()}</Typography>
          <Typography sx={{m:3, color:'secondary.main'}}>{props.description}</Typography>
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
