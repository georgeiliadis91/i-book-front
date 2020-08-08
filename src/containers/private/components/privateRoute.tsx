import React from 'react';

interface Props {
	children: React.ReactChild;
}

const privateRoute = ({ children }: Props) => {
	return <div>{children}</div>;
};

export default privateRoute;
