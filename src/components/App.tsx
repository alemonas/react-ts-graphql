import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />      
    </ThemeProvider>
  );
}

export default App;
