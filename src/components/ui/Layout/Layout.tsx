import React from 'react';
import './layout.style.scss';

interface Props {
	children?: React.ReactNode;
}

const Layout = ({ children }: Props) => {
	return <div className="container">{children}</div>;
};

export default Layout;
