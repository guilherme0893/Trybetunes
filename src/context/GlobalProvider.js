import PropTypes from 'prop-types';
import React, { useState } from 'react';
import GlobalContext from './GlobalContext';

const GlobalProvider = ({ children }) => {
  const [login, setLogin] = useState('');

  const [album, setAlbum] = useState([]);

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const [search, setSearch] = useState('');

  const [defaultValue, setDefaultValue] = useState('');

  const [searchText, setSearchText] = useState('');

  const [searchSuccessfull, setSearchSuccessfull] = useState(false);

  const [spiner, setSpiner] = useState(true);

  const [music, setMusic] = useState([]);

  const [favorite, setFavorite] = useState(false);

  const [searched, setSearched] = useState(false);

  const [artistName, setArtistName] = useState('');

  const contextValues = {
    album,
    setAlbum,
    login,
    setLogin,
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
    spiner,
    setSpiner,
    music,
    setMusic,
    favorite,
    setFavorite,
    searched,
    setSearched,
    artistName,
    setArtistName,
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
