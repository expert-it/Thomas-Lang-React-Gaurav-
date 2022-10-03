import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import OrderLisPage from './Pages/OrderLisPage';
import AllRoutes from './allRoutes';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <AllRoutes />
    </ChakraProvider>
  );
}

export default App;
