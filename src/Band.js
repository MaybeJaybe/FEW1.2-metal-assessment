import React from 'react';
import data from './metal.json';
import BandList from './BandList';

function Band() {
    const cards = data.map(({band_name, formed, origin, fans}) => {
        return (
            <BandList 
            key={band_name}
            band_name={band_name}
            formed={formed}
            origin={origin}
            fans={fans}
            />
        )
    })
    return (
        <div>
            {cards}
        </div>
    )
}
export default Band;