import { CardMedia, Grid, Typography } from '@mui/material';
import NavigationBar from './NavigationBar';

const ContentPlace = (props) => {
  return (
    <Grid
      container
      alignItems='center'
      justifyContent='space-between'
      sx={{
        m: 0,
        flexDirection: {
          xs: 'column-reverse',
          md: 'row',
        },
      }}
    >
      <Grid container item xs={12} md={7} justifyContent='space-around'>
        <Grid container item xs={12} md={2}>
          <NavigationBar />
        </Grid>
        <Grid container item xs={12} md={9} direction='column' sx={{m:1}}>
          <Typography variant='caption' sx={{ color: 'secondary.main' }}>
            THE TERMINOLOGY ...
          </Typography>
          <Typography component='h1' variant='h3' sx={{ m: 1 }}>
            {props.name.toUpperCase()}
          </Typography>
          <Typography variant='body1' sx={{ color: 'secondary.main', mt: 2 }}>
            {props.description}
          </Typography>
        </Grid>
      </Grid>

      <Grid container item xs={12} md={5} sx={{ my: { xs: 2, md: 0 } }}>
        <CardMedia component='img' image={props.image} sx={{ width: '100%' }} />
      </Grid>
    </Grid>
  );
};

export default ContentPlace;
