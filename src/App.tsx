import React from 'react';
import { ThemeProvider } from 'styled-components';
import Router from './router/Router';
import GlobalStyle from './styles/GlobalStyle';
import LightTheme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
