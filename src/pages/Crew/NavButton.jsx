import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import NavigationContext from './Context';

const values = [0, 1, 2, 3];
const NavButton = () => {
  const { index, setIndex } = useContext(NavigationContext);
  return (
    <ToggleButtonGroup
      exclusive
      value={index}
      onChange={(e, curr) => curr !== null && setIndex(curr)}
    >
      {values.map((currValue) => (
        <ToggleButton
          value={currValue}
          key={currValue}
          sx={{
            height: 15,
            width: 15,
            mx: 0.75,
            borderRadius: '50% !important',
            backgroundColor: currValue === index ? 'white !important' : 'grey',
            '&:hover': {
              backgroundColor: currValue !== index && '#979797',
            },
          }}
        />
      ))}
    </ToggleButtonGroup>
  );
};

export default NavButton;
