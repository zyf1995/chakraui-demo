import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { ChakraProvider, CSSReset, theme } from '@chakra-ui/react';

// theme.config.initialColorMode = 'dark'
// theme.config.useSystemColorMode = true
// console.log(theme)

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <CSSReset />
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);