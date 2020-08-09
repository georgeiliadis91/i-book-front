import React, { lazy, Suspense, useMemo, useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loading from './components/share/Loading';
import Layout from './components/ui/Layout';

import CssBaseline from '@material-ui/core/CssBaseline';

import publicRoutes from './containers/publicRoutes';
import privateRoutes from './containers/privateRoutes';
import { isValidUser } from './services/userApi';

import Header from './components/ui/Layout/components/Header';
import Footer from './components/ui/Layout/components/Footer';
import PrivateRoute from './components/share/PrivateRoute/PrivateRoute';

const App = () => {
	const [user, setUser] = useState<any>(
		JSON.parse(localStorage.getItem('user') as string)
	);
	const [isLogged, setIsLogged] = useState(false);

	useEffect(() => {
		if (user) {
			const fetchUserData = async () => {
				const userStatus = await isValidUser(user.token);
				setIsLogged(userStatus);
			};
			fetchUserData();
		}
	}, [user]);

	// TODO handle those 2 functions
	const logout = async () => {
		await localStorage.removeItem('user');
		setIsLogged(false);
	};

	const login = async () => {
		await localStorage.setItem('user', JSON.stringify({ token: true }));
		// const userStatus = await isValidUser(user.token);
		setIsLogged(true);
	};

	const pubRoutes = useMemo(() => {
		if (publicRoutes.length > 0) {
			const routes = publicRoutes.map((item) => (
				<Route {...item.route} key={item.key} />
			));
			return routes;
		}
		return null;
	}, []);

	const privRoutes = useMemo(() => {
		if (privateRoutes.length > 0 && isLogged) {
			const routes = privateRoutes.map((item) => (
				<PrivateRoute isLogged={isLogged} {...item.route} key={item.key} />
			));
			return routes;
		}
		return null;
	}, [isLogged]);

	return (
		<BrowserRouter>
			<CssBaseline />
			<Header isLogged={isLogged} logout={logout} login={login} />
			<Switch>
				<Layout>
					<Suspense fallback={<Loading />}>{pubRoutes}</Suspense>
					<Suspense fallback={<Loading />}>{privRoutes}</Suspense>
				</Layout>
				<Route component={() => <h1>404</h1>} />
			</Switch>
			{/* TODO enable the footer at a later stage */}
			{/* <Footer /> */}
		</BrowserRouter>
	);
};

export default App;
