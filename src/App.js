import './App.css';
import Main from './pages/Main';
import Header from './components/Header';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import { Box } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { DefaultTheme } from './DefaultTheme';
import { Route, Routes, useLocation } from 'react-router-dom';
import { images } from './Images';

function App() {
  let { pathname: location } = useLocation();
  if (images[location] === undefined) location = '/';

  const styles = {
    main: {
      minHeight: '100%',
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
            xs: `url(${images[location].xs})`,
            md: `url(${images[location].md})`,
            lg: `url(${images[location].lg})`,
          },
        }}
      >
        <Header />
        <Box sx={{ mx: 5 }}>
          <Routes>
            <Route index element={<Main />} />
            <Route path='/destination' element={<Destination />} />
            <Route path='/crew' element={<Crew />} />
            <Route path='/technology' element={<Technology />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
