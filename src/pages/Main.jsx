import { Grid, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Main = (props) => {
  return (
    <Grid
      container
      alignItems='center'
      justifyContent='space-between'
      sx={{ py: { xs: 0, md: 8 } }}
    >
      <Grid
        container
        item
        xs={12}
        md={5}
        justifyContent={{ xs: 'center', md: 'start' }}
        sx={{ m: 5 }}
      >
        <Typography
          variant='h4'
          component='h2'
          sx={{ color: 'secondary.main' }}
        >
          SO, YOU WANT TO TRAVEL TO
        </Typography>
        <Typography variant='h1' align='center' sx={{ color: 'white', my: 2 }}>
          SPACE
        </Typography>
        <Typography variant='body2' sx={{ color: 'secondary.main' }}>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={5}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Link
          to='/destination'
          onClick={() => props.onURLChange('/destination')}
        >
          <Box
            sx={{
              width: 274,
              height: 274,
              mb: 2,
              background: 'white',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              '&:hover': {
                outline: { lg: '80px solid rgb(60, 60, 60)' },
              },
            }}
          >
            <Typography
              variant='h5'
              component='h2'
              sx={{ color: 'black !important' }}
            >
              EXPLORE
            </Typography>
          </Box>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Main;
