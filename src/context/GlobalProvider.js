import PropTypes from 'prop-types';
import React, { useState } from 'react';
import GlobalContext from './GlobalContext';
import useLocalStorage from '../hooks/saveToLocalStorage';

const GlobalProvider = ({ children }) => {
  const [login, setLogin] = useState('');

  const [password, setPassword] = useState('');

  const [album, setAlbum] = useState([]);

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const [search, setSearch] = useState('');

  const [defaultValue, setDefaultValue] = useState('');

  const [searchText, setSearchText] = useState('');

  const [searchSuccessfull, setSearchSuccessfull] = useState(false);

  const [spinner, setSpinner] = useState(false);

  const [music, setMusic] = useState([]);

  const [favorite, setFavorite] = useState(false);

  const [searched, setSearched] = useState(false);

  const [artistName, setArtistName] = useState('');

  const [albumName, setAlbumName] = useState('');

  const [
    sendToLocalStorage,
    setSendToLocalStorage,
  ] = useLocalStorage('favoriteSongs', []);

  const contextValues = {
    album,
    setAlbum,
    login,
    setLogin,
    password,
    setPassword,
    isButtonDisabled,
    setIsButtonDisabled,
    search,
    setSearch,
    defaultValue,
    setDefaultValue,
    searchText,
    setSearchText,
    searchSuccessfull,
    setSearchSuccessfull,
    spinner,
    setSpinner,
    music,
    setMusic,
    favorite,
    setFavorite,
    searched,
    setSearched,
    artistName,
    setArtistName,
    sendToLocalStorage,
    setSendToLocalStorage,
    albumName,
    setAlbumName,
  };

  return (
    <GlobalContext.Provider value={ contextValues }>
      { children }
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalProvider;
