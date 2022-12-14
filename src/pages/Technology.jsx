import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';
import ContentPlace from './Technology/ContentPlace';
import { TechData } from './Technology/TechnologyData';
import TechnologyContext from './Technology/TechnologyContext';

const Technology = () => {
  const [index, setIndex] = useState(0);
  const theme = useTheme();
  const bigRes = useMediaQuery(theme.breakpoints.up('md'));

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
        name={TechData[index].name}
        description={TechData[index].description}
        image={
          bigRes
            ? TechData[index].images.portrait
            : TechData[index].images.landscape
        }
      />
    </TechnologyContext.Provider>
  );
};

export default Technology;
