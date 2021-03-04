import React from 'react';
import data from './metal.json';
import BandList from './BandList';
import Like from './Like';

function Band() {
    const cards = data.map(({band_name, formed, origin, fans}) => {
        return (
            <div>
                <BandList 
                    key={band_name}
                    band_name={band_name}
                    formed={formed}
                    origin={origin}
                    fans={fans}
                />
                <Like />
            </div>
        )
    })
    return (
        <div className="Band">
            {cards}
        </div>
    )
}
export default Band;