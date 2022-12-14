import React, { useState } from 'react';
import DestinationContent from './Destination/DestinationContent';
import { base } from './Destination/DestinationData';
import { Stack, Typography } from '@mui/material';

const Destination = () => {
  const [content, setContent] = useState('moon');
  return (
    <>
      <Stack direction='row' spacing={1} sx={{ mb: 3 }}>
        <Typography component='span' variant='h5' sx={{ color: 'grey' }}>
          01
        </Typography>
        <Typography component='h2' variant='h5' sx={{ color: 'white' }}>
          PICK YOUR DESTINATION
        </Typography>
      </Stack>
      <DestinationContent
        image={base[content].image}
        description={base[content].body}
        distance={base[content].distance}
        travelTime={base[content].travelTime}
        onSelect={(curr) => setContent(curr)}
      />
    </>
  );
};

export default Destination;
