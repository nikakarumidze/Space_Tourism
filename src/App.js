import './App.css';
import Main from './pages/Main';
import Header from './components/Header';
import { Box } from '@mui/material';
import mobileImage from './assets/home/background-home-mobile.jpg';
import tabletImage from './assets/home/background-home-tablet.jpg';
import desktopImage from './assets/home/background-home-desktop.jpg';
import Destination from './pages/Destination';
import { ThemeProvider } from '@emotion/react';
import { DefaultTheme } from './DefaultTheme';

function App() {
  const styles = {
    main: {
      height: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    },
  };
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Box
        style={styles.main}
        sx={{
          backgroundImage: {
            xs: `url(${mobileImage})`,
            md: `url(${tabletImage})`,
            lg: `url(${desktopImage})`,
          },
        }}
      >
        <Header />
        {/* <Main /> */}
        <Destination />
      </Box>
    </ThemeProvider>
  );
}

export default App;
