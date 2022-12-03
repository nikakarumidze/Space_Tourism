import { createTheme } from "@mui/material";

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
        fontSize: '150px'
      },
      h2: {
        fontFamily: 'Bellefair Regular',
        fontSize: '100px'
      },
      h3: {
        fontFamily: 'Bellefair Regular',
        fontSize: '56px'
      },
      h4: {
        fontFamily: 'Bellefair Regular',
        fontSize: '32px'
      },
      h5: {
        fontFamily: 'Barlow Condensed Regular',
        fontSize: '28px',
        letterSpacing: '4.75'
      },
      subtitle1: {
        fontFamily: 'Bellefair Regular',
        fontSize: '28px',
      },
      subtitle2: {
        fontFamily: 'Barlow Condensed Regular',
        fontSize: '14px',
        letterSpacing: '2.35'
      },
      caption: {
        fontFamily: 'Barlow Condensed Regular',
        fontSize: '16px',
        letterSpacing: '2.7'
      },
      body1: {
        fontFamily: 'Barlow',
        fontSize: '18px',
      }
    }
  });