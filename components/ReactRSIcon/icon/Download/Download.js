import React from 'react';

const Download = ({ color = 'currentColor', size = '1em', ...rest }) => {
    return (
        <svg

            xmlns="http://www.w3.org/2000/svg"

            width={size}
            height={size}
            fill={color}
            {...rest}
            viewBox="0 0 512 512">
            <g>
                <g>
                    <path d="M480.6,341.4c-11.3,0-20.4,9.1-20.4,20.4v98.4H51.8v-98.4c0-11.3-9.1-20.4-20.4-20.4c-11.3,0-20.4,9.1-20.4,20.4v118.8    c0,11.3,9.1,20.4,20.4,20.4h449.2c11.3,0,20.4-9.1,20.4-20.4V361.8C501,350.5,491.9,341.4,480.6,341.4z" />
                    <path d="m241,365.6c11.5,11.6 25.6,5.2 29.9,0l117.3-126.2c7.7-8.3 7.2-21.2-1.1-28.9-8.3-7.7-21.2-7.2-28.8,1.1l-81.9,88.1v-265.2c0-11.3-9.1-20.4-20.4-20.4-11.3,0-20.4,9.1-20.4,20.4v265.3l-81.9-88.1c-7.7-8.3-20.6-8.7-28.9-1.1-8.3,7.7-8.7,20.6-1.1,28.9l117.3,126.1z" />
                </g>
            </g>
        </svg>

    );
};
// https://github.com/SRAKIB17/ReactCustomIconsLibrary.git

export default Download;