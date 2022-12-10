import React, { useState } from 'react';
import DestinationContent from './Destination/DestinationContent';
import { Box, Typography } from '@mui/material';
import moon from '../assets/destination/image-moon.png';
import mars from '../assets/destination/image-mars.png';
import europa from '../assets/destination/image-europa.png';
import titan from '../assets/destination/image-titan.png';
import { Stack } from '@mui/system';

const base ={
  moon: {
    body: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    distance: '384,400 km',
    travelTime: '3 DAYS',
    image: moon,
  },
  mars: {
    body: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
    distance: '225 mil. km',
    travelTime: '9 MONTHS',
    image: mars,
  },
  europa: {
    body: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    distance: '628 mil. km',
    travelTime: '3 YEARS',
    image: europa,
  },
  titan: {
    body: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
    distance: '1.6 bil. km',
    travelTime: '7 YEARS',
    image: titan,
  },
};

const Destination = () => {
  const [content, setContent] = useState('moon');
  const selectorChanger = (curr) => setContent(curr);
  return (
      <>
      <Stack direction='row' spacing={1} sx={{mb:3}}>
        <Typography component='span' variant='h5' sx={{color:'grey'}}>01</Typography>
        <Typography component='h2' variant='h5' sx={{color:'white'}}>
          PICK YOUR DESTINATION
        </Typography>
      </Stack>
      <DestinationContent
        image={base[content].image}
        description={base[content].body}
        distance={base[content].distance}
        travelTime={base[content].travelTime}
        onSelect={selectorChanger}
      />
    </>
  );
};

export default Destination;
