import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Header from './components/header/header.component';
import Home from './components/home/home';
 
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <Home/>
    </ThemeProvider>
  );
}

export default App;
