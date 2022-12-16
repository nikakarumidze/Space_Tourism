import { CardMedia, Divider, Grid, Stack, Typography } from '@mui/material';
import NavButton from './NavButton';

const MemberInfo = (props) => {
  return (
    <>
      <Stack direction='row' spacing={1}>
        <Typography component='span' variant='h5' sx={{ color: 'grey' }}>
          02
        </Typography>
        <Typography component='h2' variant='h5' sx={{ color: 'white' }}>
          MEET YOUR CREW
        </Typography>
      </Stack>
      <Grid
        container
        alignItems='start'
        justifyContent='space-around'
        direction={{
          xs: 'column !important',
          sm: 'column-reverse !important',
          md: 'row !important',
        }}
        sx={{ width: 'auto' }}
      >
        <Grid
          container
          item
          xs={12}
          md={6}
          sx={{ mt: { xs: 0, md: 10 } }}
          alignItems='center'
          justifyContent={{ xs: 'center', md: 'start' }}
          direction={{ xs: 'row', sm: 'column-reverse', md: 'row' }}
        >
          <Grid
            container
            item
            alignItems={{ xs: 'center', md: 'start' }}
            direction='column'
            sx={{ mb: 5 }}
          >
            <Typography variant='h4' sx={{ mt: 5, color: 'grey !important' }}>
              {props.position.toUpperCase()}
            </Typography>
            <Typography variant='h3' sx={{ color: 'white', my: 2 }}>
              {props.name.toUpperCase()}
            </Typography>
            <Typography variant='body1' sx={{ color: 'secondary.main' }}>
              {props.description}
            </Typography>
          </Grid>
          <NavButton />
        </Grid>
        <Divider />
        <Grid
          container
          item
          xs={12}
          md={6}
          justifyContent='center'
          sx={{ mt: { xs: 1, md: 0 }, mb: { xs: 0, sm: 2, md: 0 } }}
        >
          <CardMedia
            component='img'
            image={props.image}
            alt='Place for content image'
            sx={{
              width: '75%',
              objectFit: 'contain',
              overFlow: 'hidden',
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default MemberInfo;
