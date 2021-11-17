import React from 'react';
import { useState } from 'react';

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }

    return (
        <div className="container h-20 pl-10 pt-5">
        <input
          type="text"
          className="h-10 w-72 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none"
          placeholder="Search movie..."
          onChange={handleChange}
          value={searchTerm}
        />
        <div className="absolute top-4 right-3">
          <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>{" "}
        </div>
      </div>
    )
}

export default SearchBar
