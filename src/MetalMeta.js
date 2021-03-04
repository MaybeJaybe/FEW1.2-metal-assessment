import React from 'react';
import data from './metal.json'

function MetalMeta() {
    const num_bands = data.length
    return(
        <div>
            <h2>Metal Bands</h2>
            <g-emoji class="g-emoji" alias="metal" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f918.png">🤘</g-emoji>
            <div>Bands: {num_bands}</div>
        </div>
    )
}
export default MetalMeta;