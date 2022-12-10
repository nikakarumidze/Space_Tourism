import { CardMedia, Grid, Stack, Typography } from '@mui/material';
import NavButton from './NavButton';

const MemberInfo = (props) => {
  return (
    <Grid
      container
      spacing={4}
      justifyContent='space-between'
      sx={{width: 'auto' }}
    >
      <Grid item md={12} lg={5}>
        <Stack direction='row' spacing={1} sx={{ mb: 12 }}>
          <Typography component='span' variant='h5' sx={{ color: 'grey'}}>
            02
          </Typography>
          <Typography component='h2' variant='h5' sx={{ color: 'white' }}>
            MEET YOUR CREW
          </Typography>
        </Stack>
        <Stack spacing={2}>
          <Typography variant='h4'>{props.position.toUpperCase()}</Typography>
          <Typography variant='h3' sx={{ color: 'white' }}>
            {props.name.toUpperCase()}
          </Typography>
          <Typography variant='body1' sx={{ color: 'secondary.main' }}>
            {props.description}
          </Typography>
          <NavButton />
        </Stack>
      </Grid>
      <Grid item md={12} lg={5} justifyContent='center'>
        <CardMedia
          component='img'
          image={props.image}
          alt='Place for content image'
          sx={{
            objectFit: 'contain',
            overFlow: 'hidden'
          }}
        />
      </Grid>
    </Grid>
  )
}

export default MemberInfo