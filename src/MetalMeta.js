import React from 'react';
import data from './metal.json';
import './MetalMeta.css';

function MetalMeta() {
    const num_bands = data.length
    return(
        <div className="MetalMeta">
            <div className="Metal">
                <h2>Metal Bands</h2>
                <g-emoji class="g-emoji" alias="metal" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f918.png">🤘</g-emoji>
            </div>
            <div>Bands: {num_bands}</div>
        </div>
    )
}
export default MetalMeta;