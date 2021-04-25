import React from 'react';

import './search-bar.style.css';

const SearchBar = () => {
    return (
        <div className="search-bar-container">
            <div>
                <input type="text" placeholder="Search..." className="search-input"/> <br/>
            </div>
            <div>
                <input type="checkbox"/> Only show products in stock
            </div>
        </div>
    );
}

export default SearchBar;