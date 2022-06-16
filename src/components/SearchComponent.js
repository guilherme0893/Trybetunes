import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import { Input, InputLabel, Box, Stack } from '@mui/material';
import Spinner from 'react-bootstrap/Spinner';
import SearchIcon from '@mui/icons-material/Search';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import GlobalContext from '../context/GlobalContext';

function SearchComponent() {
  const {
    isButtonDisabled,
    setIsButtonDisabled,
    setAlbum,
    searchText,
    setSearchText,
    spiner,
    setSpiner,
    setSearched,
    setArtistName,
  } = useContext(GlobalContext);

  const handleSearchInput = ({ target }) => {
    const inputControl = 2;
    if (target.value.length >= inputControl) {
      setIsButtonDisabled(false);
    }
    setSearchText(target.value);
  };

  const onSearchButtonClick = () => {
    setSpiner(true);
    searchAlbumsAPI(searchText)
      .then((response) => {
        setAlbum(response);
      });
    setArtistName(searchText);
    setSearched(true);
    setSearchText('');
  };

  return (
    <div>
      <Box>
        {!spiner ? (
          <Spinner animation="border" role="status">
            <span>
              Loading...
            </span>
          </Spinner>
        ) : (
          <Stack
            style={ {
              padding: '8px',
            } }
            data-testid="page-search"
            display="flex"
            direction="row"
            alignItems="center"
          >
            <Box>
              <InputLabel
                htmlFor="search-artist-input"
              >
                <Input
                  style={ {
                    backgroundColor: 'white',
                    padding: '4px',
                  } }
                  sx={ { borderRadius: '5px' } }
                  id="search-artist-input"
                  data-testid="search-artist-input"
                  type="search"
                  placeholder="Search and relax"
                  name="search-artist-input"
                  onChange={ handleSearchInput }
                />
              </InputLabel>
            </Box>
            <Box>
              <Button
                style={ {
                  backgroundColor: 'gray',
                  padding: '8px',
                  marginLeft: '5px',
                } }
                variant="contained"
                type="submit"
                data-testid="search-artist-button"
                disabled={ isButtonDisabled }
                onClick={ onSearchButtonClick }
              >
                <SearchIcon />
              </Button>
            </Box>
          </Stack>
        )}
      </Box>
    </div>
  );
}

export default SearchComponent;
