import React, {useState, useEffect} from 'react';
import './App.css';

import SearchBar from '../SearchBar/searchBar';
import Business from '../business/Business';
import BusinessList from '../businessList/BusinessList';
const b_array = [
  {
    image: "data:image/jpeg;base64,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",
    name: "The lady 111",
    address: "Somewhere",
    city: "Kamloops",
    state: "British Columbia",
    zipcode: "V2C",
    category: "African",
    rating: 5,
    review_count: 24
  }, 
  {
    image: "data:image/jpeg;base64,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",
    name: "The lady 2",
    address: "Somewhere",
    city: "Vancouver",
    state: "British Columbia",
    zipcode: "V2C 6N2",
    category: "Jamican",
    rating: 4.6,
    review_count: 43
  },
  {
    image: "data:image/jpeg;base64,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",
    name: "The lady 333",
    address: "Somewhere",
    city: "Kamloops",
    state: "British Columbia",
    zipcode: "V2C",
    category: "Chinese",
    rating: 5,
    review_count: 24
  }
];
function App() {
  const [filter, setFilter] = useState('BestMatch');
  const changeFilter = (param) => {
    setFilter(param);
  }

  const [business, setBusiness] = useState('');
  const changeBusiness = (param) => {
    setBusiness(param);
  }

  const [location, setLocation] = useState('');
  const changeLocation = (param) => {
    setLocation(param);
  }
  return (
    <div className="App">
      <header>
        <h1 id='header-title'>Ravenous</h1>
      </header>
        <SearchBar onChangeFilter={changeFilter} onChangeBusiness={changeBusiness} onChangeLocation={changeLocation} filter={filter} business={business} location={location}/>
        <BusinessList array={b_array}/>
    </div>
  );
}

export default App;
