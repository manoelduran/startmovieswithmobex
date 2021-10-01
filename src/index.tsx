import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider} from "@chakra-ui/react"
import Home from './Home';
import { theme } from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <Home />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
