import React from 'react';
import Business from "../business/Business";
import './BusinessList.css'

function BusinessList(props) {
    const bs = props.array.map(b => <Business b={b} />);
    return (
    <div id='business-list'>
        {bs}
    </div>
    );
}

export default BusinessList;