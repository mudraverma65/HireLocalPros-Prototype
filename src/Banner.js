import React, { useState} from 'react';
import jsonData from './data.json';
import './styles.css';
import SearchBar from './SearchBar';
import SearchValid from './SearchValid';

function Banner(){

    const [searchResults, setSearchResults] = useState([]);

    // Function to handle the search based on the selected category
    const handleSearch = (category) => {

        // Filtering the jsonData based on the selected category
        const filteredResults = jsonData.filter((item) =>
        item.category.toLowerCase().includes(category.toLowerCase())
        );
        setSearchResults(filteredResults);
    };

    return(
        <div class = 'Frame'>
            <div class = 'Banner'>
                <div class = 'BannerTitle'>
                    Find the right professional for your task
                </div>
                <div class = 'SearchRow'>
                    <div class = 'Location'>
                        <select>
                            <option value="option1">Halifax</option>
                            <option value="option2">Mumbai</option>                                <option value="option3">New York</option>
                        </select>
                    </div>
                    <SearchBar handleSearch={handleSearch}/>
                    <SearchValid searchResults={searchResults} />
                </div>
            </div>  
        </div>
    );
}

export default Banner;