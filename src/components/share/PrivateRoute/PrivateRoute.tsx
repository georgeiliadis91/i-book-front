import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component, isLogged, ...rest }: any) => {
	
	const routeComponent = (props: any) =>
		isLogged ? (
			React.createElement(component, props)
		) : (
			<Redirect to={{ pathname: '/' }} />
		);
	return <Route {...rest} render={routeComponent} />;
};

export default PrivateRoute;
