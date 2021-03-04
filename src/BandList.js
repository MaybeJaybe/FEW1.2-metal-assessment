import React from 'react';

function BandList(props) {
    const {band_name, formed, origin, fans} = props;
    return (
        <div>
            <h3>{band_name}</h3>
            <div>Formed: {formed}</div>
            <div>{origin}</div>
            <div>Fans: {fans}</div>
        </div>
    )
}
export default BandList;