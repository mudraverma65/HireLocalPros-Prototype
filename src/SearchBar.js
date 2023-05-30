import React, { useState } from 'react';
import './styles.css';
import search from './search.png';

const SearchBar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="SearchBar">
        <img src={search} className="SearchIcon" alt="Search Icon" />
        <input type="text" value={searchTerm} onChange={handleChange} />
      </div>
    </form>
  );
};

export default SearchBar;
