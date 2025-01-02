import React, {useState, useEffect} from 'react';
import './searchBar.css';

const filters = ['BestMatch', 'HighestRated', 'MostReviewed'];

function SearchBar(props) {
    const onClick1 = () => {
        props.onChangeFilter(filters[0]);
    }
    const onClick2 = () => {
        props.onChangeFilter(filters[1]);
    };
    const onClick3 = () => {
        props.onChangeFilter(filters[2]);
    }
    useEffect( () => {
        if(props.filter === filters[0]) {
            document.getElementById('best-match').style.color = '#B68C5A';
            document.getElementById('highest-rated').style.color = 'white';
            document.getElementById('most-reviewed').style.color = 'white';
        }
        else if(props.filter === filters[1]) {
            document.getElementById('best-match').style.color = 'white';
            document.getElementById('highest-rated').style.color = '#B68C5A';
            document.getElementById('most-reviewed').style.color = 'white';
        }
        else {
                document.getElementById('best-match').style.color = 'white';
                document.getElementById('highest-rated').style.color = 'white';
                document.getElementById('most-reviewed').style.color = '#B68C5A';
            }
        })

    const onChangeBusiness = (event) => {
        props.onChangeBusiness(event.target.value);
    }

   useEffect( () => {
    const handleMouseDown = () => {
        console.log('Searching Yelp with Pizza, Brooklyn, best_match');
        alert(`Business: ${props.business}\nFilter: ${props.filter}\nLocation: ${props.location}`);
    };
    const button = document.getElementById('lets-go-button');

    button.addEventListener('mousedown', handleMouseDown);
    return () => {
        button.removeEventListener('mousedown', handleMouseDown);
    };
   }, [props.location, props.business, props.filter])

    const onChangeLocation = (event) => {
        props.onChangeLocation(event.target.value)
    }
    return (
        <div id="search-bar">
            <div className="search-bar-tabs">
                <div id='best-match'><a onClick={onClick1}>Best Match</a></div>
                <div id='highest-rated'><a onClick={onClick2}>Highest Rated</a></div>
                <div id='most-reviewed'><a onClick={onClick3}>Most Reviewed</a></div>
            </div>
            <div className="search-box">
                <input type="text" id="search-business" className="search" value={props.business} placeholder="Search Businesses" onChange={onChangeBusiness} />
                <input type="text" id="search-location" className="search" value={props.location} placeholder="Where?" onChange={onChangeLocation} />
            </div>
            <input type='button' id="lets-go-button" value="Let's Go!"/>
        </div>
    );
}


export default SearchBar;