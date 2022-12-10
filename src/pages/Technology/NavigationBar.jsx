import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import TechnologyContext from './TechnologyContext';
const values = [0, 1, 2];
const NavigationBar = () => {
  const { index, setIndex } = useContext(TechnologyContext);
  return (
    <ToggleButtonGroup
      exclusive
      value={index}
      onChange={(e, curr) => curr !== null && setIndex(curr)}
      sx={{flexDirection: {
        sx: 'row',
        md: 'column',
        margin: 'auto'
      }}}
    >
      {values.map((val) => (
        <ToggleButton value={val} key={val} size='large' sx={{border: 0}}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 50,
              height: 50,
              border: '0.5px solid white',
              color: val !== index ? 'white !important' : 'black',
              borderRadius: '50% !important',
              backgroundColor: val === index ? 'white !important' : 'none',
              '&:hover': {
                backgroundColor: '#979797',
              },
            }}
          >
            {val + 1}
          </Box>
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default NavigationBar;
