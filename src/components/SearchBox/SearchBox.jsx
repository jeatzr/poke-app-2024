import React from 'react';
import './search-box.styles.css';

const SearchBox = ({ placeholder, onSearchChange }) => {

  function onInputChange(e) {
    onSearchChange(e.target.value)
  }

  return (
    <input
      className='search'
      type='search'
      placeholder={placeholder}
      onChange={onInputChange}
    />);
}


export default SearchBox;