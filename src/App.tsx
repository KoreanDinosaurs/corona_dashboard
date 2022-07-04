import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import LightTheme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <GlobalStyle />
      강동현
    </ThemeProvider>
  );
}

export default App;
