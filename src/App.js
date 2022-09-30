import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import OrderLisPage from './Pages/OrderLisPage';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <OrderLisPage />
    </ChakraProvider>
  );
}

export default App;
