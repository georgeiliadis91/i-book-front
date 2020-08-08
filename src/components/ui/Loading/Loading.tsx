import React from 'react';

interface Props {}

const Loading = (props: Props) => {
	return (
		<div className='loader-wrapper loader-wrapper--4'>
			<div className='loader loader--4'>
				<div className='circle'></div>
			</div>
		</div>
	);
};

export default Loading;
