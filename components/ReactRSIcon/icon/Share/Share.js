import React from 'react';

const Share = ({ color = 'currentColor', size = '1em', ...rest }) => {
    return (
        <svg

            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill={color}
            {...rest}

            viewBox="0 0 8 8">
            <path d="M.75 0c-.41 0-.75.34-.75.75v5.5c0 .41.34.75.75.75h4.5c.41 0 .75-.34.75-.75v-1.25h-1v1h-4v-5h2v-1h-2.25zm5.25 0v1c-2.05 0-3.7 1.54-3.94 3.53.21-.88.99-1.53 1.94-1.53h2v1l2-2-2-2z" />
        </svg>
    );
};
// https://github.com/SRAKIB17/ReactCustomIconsLibrary.git

export default Share;