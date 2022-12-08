import { CardMedia, Grid, Typography } from '@mui/material';
import NavigationBar from './NavigationBar';

const ContentPlace = (props) => {
  return (
    <Grid container spacing={5} alignItems="center">
        <Grid container item xs={12} lg={2} justifyContent='flex-end'>
          <NavigationBar />
        </Grid>
        <Grid container item xs={12} lg={5} direction='column'>
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

        <Grid item xs={12} lg={5}>
          <CardMedia
            component='img'
            //   image={props.image}
            sx={{ 
                background: `url(${props.image})`,
                height: '500px',
                objectFit: 'contain'
             }}
          />
        </Grid>
      </Grid>
  )
}

export default ContentPlace