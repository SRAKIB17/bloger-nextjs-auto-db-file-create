import React from 'react';

const ArrowsRightDouble = ({ color = 'currentColor', size = '1em', ...rest }) => {
    return (
        <svg

            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill={color}
            {...rest}
            viewBox="0 0 64 64" >
            <g>
                <polygon points="30.293,15.707 46.586,32 30.293,48.293 31.854,49.707 49,32.707 49,31.293 31.854,14.293 	" />
                <polygon points="34,31.293 16.854,14.293 15.366,15.707 31.623,32 15.312,48.293 16.863,49.707 34,32.707 	" />
            </g>
        </svg>


    );
};
// https://github.com/SRAKIB17/ReactCustomIconsLibrary.git

export default ArrowsRightDouble;