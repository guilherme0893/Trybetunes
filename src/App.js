import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import Login from './pages/Login';
// import Search from './pages/Search';
// import Album from './pages/Album';
// import Favorites from './pages/Favorites';
// import Profile from './pages/Profile';
// import ProfileEdit from './pages/ProfileEdit';
// import NotFound from './pages/NotFound';
import Routes from './components/Route';
// first commit
// commit testando o avaliador --> tem de passar 02!

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <p>TrybeTunes</p>
        <Routes />
      </BrowserRouter>
    );
  }
}

export default App;
