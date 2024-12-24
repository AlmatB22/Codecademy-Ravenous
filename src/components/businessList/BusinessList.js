import React from 'react';
import Business from "../business/Business";
import './BusinessList.css'

function BusinessList() {
    return (
    <div id='business-list'>
        <Business />
        <Business />
        <Business />
    </div>
    );
}

export default BusinessList;