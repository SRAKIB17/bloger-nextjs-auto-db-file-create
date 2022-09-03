import React from 'react';

const Common = ({ setContent }) => {
    return (
        <>
            <li>
                <button onClick={()=>setContent('Code Highlight')}>
                    Code Highlight
                </button>
            </li>
            <li><a>Sidebar Item 2</a></li>
        </>

    );
};

export default Common;