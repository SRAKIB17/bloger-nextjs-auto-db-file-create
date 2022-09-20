import React, { useState } from 'react';

const TypeWriter = () => {
    const [font, setFont] = useState(100)
    const [line, setLine] = useState('')
    return (
        <div>

            <div className='flex flex-col gap-2'>
                <div>
                    <input
                        type="number"
                        onChange={(e) => setFont(e.target.value)}
                        min={50}
                        max={300}
                        className='input input-ghost border-primary'
                    />

                </div>
                <div>
                    <input
                        type="text"
                        onChange={e => setLine(e.target.value)}
                        className='input input-sm input-ghost border-primary' />

                </div>
            </div>
            <div>
                <embed src={`/typewriter.svg?line=${line}&colors=blue;gold;green;silver&font_size=${font}`} type="" />
            </div>

            <a href={`/typewriter.svg?line=${line}&colors=blue;gold;green;silver&font_size=${font}`} download={true}>download</a>
        </div>
    );
};

export default TypeWriter;