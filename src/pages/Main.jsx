import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Main = (props) => {
  return (
    <Grid
      container
      alignItems='center'
      justifyContent='space-between'
      py={10}
    >
      <Grid item xs={12} lg={5} sx={{ m: 5 }}>
        <Typography variant='h4' component='h2' sx={{ color: 'white' }}>
          SO, YOU WANT TO TRAVEL TO
        </Typography>
        <Typography variant='h1' align='center' sx={{ color: 'white', my: 2 }}>
          SPACE
        </Typography>
        <Typography variant='body2' sx={{ color: 'white' }}>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </Typography>
      </Grid>
      <Grid item xs={12} lg={5} 
            sx={{display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'}}
            >
        <Box
          sx={{
            width: 274,
            height: 274,
            background: 'white',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant='h5' component='h2'>
            EXPLORE
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Main;
