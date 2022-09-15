
import React from 'react';

const Message_Filled = ({ color = 'grey',strokeWidth='0', strokeColor='currentColor', size = '64', ...rest }) => {
    return (
        <svg

            xmlns="http://www.w3.org/2000/svg"

            width={size}
            height={size}
            fill={color}
            stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" 
            {...rest}

            viewBox="0 0 50 50">
            <path d="M 0 7 L 0 9.78125 C 3.012 12.40325 20.28925 27.46425 21.65625 28.65625 C 23.06225 29.88125 24.466 30 25 30 C 25.534 30 26.93775 29.88125 28.34375 28.65625 C 29.76175 27.42025 48.046 11.48225 50 9.78125 L 50 7 L 0 7 z M 0 12.4375 L 0 37.53125 L 15.125 25.59375 C 10.224 21.32675 3.231 15.2505 0 12.4375 z M 50 12.4375 C 46.949 15.0925 39.846 21.26675 34.875 25.59375 L 50 37.5 L 50 12.4375 z M 16.65625 26.9375 L 0 40.0625 L 0 43 L 50 43 L 50 40.03125 L 33.34375 26.9375 C 31.40675 28.6235 30.01025 29.84725 29.65625 30.15625 C 27.73925 31.82525 25.759 32 25 32 C 24.241 32 22.26075 31.82625 20.34375 30.15625 C 19.99275 29.85025 18.59725 28.6275 16.65625 26.9375 z"/>
        </svg>

    );
};
// https://github.com/SRAKIB17/ReactCustomIconsLibrary.git

export default Message_Filled;
    
    