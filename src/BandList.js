import React from 'react';
import './BandList.css';

function BandList(props) {
    const {band_name, formed, origin, fans} = props;
    return (
        <div className='BandList'>
            <h3>{band_name}</h3>
            <p>Formed: {formed}</p>
            <p>{origin}</p>
            <p>Fans: {fans}</p>
        </div>
    )
}
export default BandList;