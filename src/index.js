import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Business from './components/business/Business';
import BusinessList from './components/businessList/BusinessList'
import SearchBar from './components/SearchBar/searchBar';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchBar />
    <BusinessList />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
