import { Grid, Typography, Box } from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom'

const Main = (props) => {
  return (
    <Grid container alignItems='center' justifyContent='space-between' sx={{py:{xs:0,md:8}}} >
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
      <Grid
        item
        xs={12}
        lg={5}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Link to='/destination'>
          <Box
            sx={{
              width: 274,
              height: 274,
              background: 'white',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              '& :hover': {
                background: 'whitesmoke',
                // need to add hover effect
              },
            }}
          >
            <Typography variant='h5' component='h2'>
              EXPLORE
            </Typography>
          </Box>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Main;
