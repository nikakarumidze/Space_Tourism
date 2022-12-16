import Main from './pages/Main';
import Header from './components/Header';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import { Box } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { DefaultTheme } from './DefaultTheme';
import { Route, Routes } from 'react-router-dom';
import { images } from './Images';
import { useState } from 'react';

function App() {
  const [pathname, setPathname] = useState('/');

  const styles = {
    main: {
      minHeight: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
  };
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Box
        style={styles.main}
        sx={{
          backgroundImage: {
            xs: `url(${images[pathname].xs})`,
            sm: `url(${images[pathname].md})`,
            md: `url(${images[pathname].lg})`,
          },
        }}
      >
        <Header onURLChange={(path) => setPathname(path)} />
        <Box sx={{ mx: { xs: 2, md: 3, lg: 4 } }}>
          <Routes>
            <Route
              path='/'
              element={<Main onURLChange={(path) => setPathname(path)} />}
            />
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
