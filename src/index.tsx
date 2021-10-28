import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router';
import { theme } from './styles/theme';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Router />
      </ChakraProvider>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
