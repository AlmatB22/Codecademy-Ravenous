import React from 'react';
import './searchBar.css';

function SearchBar() {
    return (
        <div id="search-bar">
            <div className="search-bar-tabs">
                <div>Best Match</div>
                <div>Highest Rated</div>
                <div>Most Reviewed</div>
            </div>
            <div className="search-box">
                <input type="text" id="search-business" className="search" placeholder="Search Businesses" />
                <input type="text" id="search-location" className="search" placeholder="Where?" />
            </div>
            <input type="button" id="lets-go-button" value="Let's Go!" />
        </div>
    );
}


export default SearchBar;