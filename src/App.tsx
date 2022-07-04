import React from 'react';
import { useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';
import themeState from './recoil/ThemeMode';
import Router from './router/Router';
import GlobalStyle from './styles/GlobalStyle';
import { DarkTheme, LightTheme } from './styles/theme';

function App() {
  const theme: boolean = useRecoilValue(themeState);

  return (
    <ThemeProvider theme={theme ? LightTheme : DarkTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
