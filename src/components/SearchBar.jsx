import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../redux/actions';

const SearchBar = () => {
  const dispatch = useDispatch();

  console.log('Redux dispatch initialized');

  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search tasks..."
      onChange={handleSearch}
      className="search-bar"
    />
  );
};

export default SearchBar;
