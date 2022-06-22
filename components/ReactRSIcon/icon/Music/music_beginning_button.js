import React from 'react';

const MusicBeginningButton = ({ color = 'currentColor', size = '1em', ...rest }) => {
	return (
		<svg

			xmlns="http://www.w3.org/2000/svg"

			width={size}
			height={size}
			fill={color}
			{...rest} viewBox="0 0 64 64">
			<g>
				<path d="M17,31.214v1.572l14.191,11L33,43V21l-1.809-0.786L17,31.214z M31,40.942L19.619,32L31,23.058V40.942z" />
				<path d="M37,31.214v1.572l14.191,11L53,43V21l-1.809-0.786L37,31.214z M51,40.942L39.619,32L51,23.058V40.942z" />
				<rect x="11" y="23" width="2" height="18" />
				<path d="M32,0c-8.547,0-16.583,3.33-22.626,9.375C3.329,15.417,0,23.453,0,32s3.329,16.583,9.374,22.626
		C15.417,60.671,23.453,64,32,64s16.583-3.33,22.627-9.375C60.671,48.583,64,40.547,64,32s-3.329-16.583-9.374-22.626
		C48.583,3.329,40.547,0,32,0z M53.213,53.212C47.546,58.879,40.013,62,32,62c-8.013,0-15.546-3.121-21.212-8.789
		C5.121,47.546,2,40.013,2,32s3.121-15.546,8.788-21.212C16.454,5.121,23.987,2,32,2c8.013,0,15.546,3.122,21.213,8.789
		C58.88,16.454,62,23.987,62,32S58.88,47.546,53.213,53.212z"/>
			</g>
		</svg>
	);
};
// https://github.com/SRAKIB17/ReactCustomIconsLibrary.git
export default MusicBeginningButton;