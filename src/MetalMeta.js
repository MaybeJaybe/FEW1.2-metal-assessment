import React from 'react';
import data from './metal.json'

function MetalMeta() {
    const num_bands = data.length
    return(
        <div>
            <h2>Metal Bands</h2>
            {/* what i did to copy the emoji was inspect the tutorial's, i hope it wasnt supposed to be imported from somewhere but it works locally so... */}
            <g-emoji class="g-emoji" alias="metal" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f918.png">🤘</g-emoji>
            <div>Bands: {num_bands}</div>
        </div>
    )
}
export default MetalMeta;