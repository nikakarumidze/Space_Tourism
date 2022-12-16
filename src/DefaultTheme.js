import { createTheme } from '@mui/material';

export const DefaultTheme = createTheme({
  palette: {
    secondary: {
      main: '#D0D6F9',
      dark: '#0B0D17',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Bellefair Regular',
      fontSize: '80px',
      // eslint-disable-next-line
      ['@media (min-width:600px)']: { fontSize: '150px' },
    },
    h2: {
      fontFamily: 'Bellefair Regular',
      fontSize: '100px',
    },
    h3: {
      fontFamily: 'Bellefair Regular',
      fontSize: '24px',
      // eslint-disable-next-line
      ['@media (min-width:600px) and (max-width:900px)']: { fontSize: '40px' },
      // eslint-disable-next-line
      ['@media (min-width:900px)']: { fontSize: '56px' },
    },
    h4: {
      fontFamily: 'Bellefair Regular',
      fontSize: '20px',
      // eslint-disable-next-line
      ['@media (min-width:600px)']: { fontSize: '32px' },
    },
    h5: {
      fontFamily: 'Barlow Condensed Regular',
      fontSize: '16px',
      // eslint-disable-next-line
      ['@media (min-width:600px) and (max-width:900px)']: { fontSize: '20px' },
      // eslint-disable-next-line
      ['@media (min-width:900px)']: { fontSize: '28px' },
      letterSpacing: '4.75px',
    },
    subtitle1: {
      fontFamily: 'Bellefair Regular',
      fontSize: '28px',
    },
    subtitle2: {
      fontFamily: 'Barlow Condensed Regular',
      fontSize: '14px',
      letterSpacing: '2.35px',
    },
    caption: {
      fontFamily: 'Barlow Condensed Regular',
      fontSize: '14px',
      // eslint-disable-next-line
      ['@media (min-width:900px)']: { fontSize: '16px' },
      letterSpacing: '2.7px',
    },
    body1: {
      fontFamily: 'Barlow',
      fontSize: '16px',
      // eslint-disable-next-line
      ['@media (min-width:600px)']: { fontSize: '18px' },
    },
  },
});
