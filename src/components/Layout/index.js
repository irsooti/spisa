/* eslint-disable no-undef */
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import childrenPropType from '../../propTypes/childrenPropType';
import theme from './theme';
import layoutContext from './context';
import './style.css';
import { LayoutContainer } from './styles';

const { Provider } = layoutContext;

export const Layout = ({ children }) => {
  const [currentTheme, setTheme] = useState(
    window.localStorage.getItem('theme') || theme.light,
  );

  const setCurrentTheme = selectedTheme => {
    setTheme(selectedTheme);
    // eslint-disable-next-line no-undef
    window.localStorage.setItem('theme', selectedTheme);
  };

  return (
    <Provider value={{ setTheme: setCurrentTheme }}>
      <ThemeProvider theme={currentTheme}>
        <LayoutContainer>{children}</LayoutContainer>
      </ThemeProvider>
    </Provider>
  );
};

Layout.propTypes = {
  children: childrenPropType.isRequired,
};
