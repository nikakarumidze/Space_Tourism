import { Stack, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import ContentPlace from './Technology/ContentPlace';
import { TechnologyData } from './Technology/TechnologyData';
import TechnologyContext from './Technology/TechnologyContext';

const Technology = () => {
  const [index, setIndex] = useState(0);
  return (
    <TechnologyContext.Provider value={{ index, setIndex }}>
      <Stack direction='row' spacing={1} sx={{ mb: 2 }}>
        <Typography component='span' variant='h5' sx={{ color: 'grey' }}>
          03
        </Typography>
        <Typography component='h2' variant='h5' sx={{ color: 'white' }}>
          SPACE LAUNCH 101
        </Typography>
      </Stack>
      <ContentPlace
        name={TechnologyData[index].name}
        description={TechnologyData[index].description}
        image={TechnologyData[index].images.portrait}
      />
    </TechnologyContext.Provider>
  );
};

export default Technology;
