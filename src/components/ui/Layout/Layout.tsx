import React from 'react';
import { Container } from '../../imports/grid';
interface Props {
	children?: React.ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<Container fixed>
			<div>{children}</div>
		</Container>
	);
};

export default Layout;
