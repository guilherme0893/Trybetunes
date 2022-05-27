import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalProvider from './context/GlobalProvider';
import Routes from './components/Route';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class App extends React.Component {
  render() {
    return (
      <GlobalProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </GlobalProvider>
    );
  }
}

export default App;
