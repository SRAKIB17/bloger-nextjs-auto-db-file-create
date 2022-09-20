import React from 'react';
import GenerateSVG from './GenerateSVG';

const TypeWriter = () => {

    const { svg } = GenerateSVG()
    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: svg }}>

            </div>

        </div>
    );
};

export default TypeWriter;