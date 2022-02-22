import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/Route';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  }
}

export default App;
