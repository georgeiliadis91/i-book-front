import React, { lazy, Suspense, useMemo, useState, useEffect } from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	useHistory,
	RouteComponentProps,
} from 'react-router-dom';
import Loading from './components/share/Loading';
import Layout from './components/ui/Layout';

import CssBaseline from '@material-ui/core/CssBaseline';

import publicRoutes from './containers/publicRoutes';
import privateRoutes from './containers/privateRoutes';
import { isValidUser } from './services/userApi';

import Header from './components/ui/Layout/components/Header';
import Footer from './components/ui/Layout/components/Footer';

interface Props extends RouteComponentProps {}

const App: React.FC<Props> = () => {
	const history = useHistory;();
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
		history.push('/');
	};

	const login = async () => {
		await localStorage.setItem('user', JSON.stringify({ token: true }));
		const userStatus = await isValidUser(user.token);
		setIsLogged(userStatus);
		history.push('/');
	};

	const pubRoutes = useMemo(() => {
		if (publicRoutes) {
			const routes = publicRoutes.map((item) => (
				<Route {...item.route} key={item.key} />
			));
			return routes;
		}
		return null;
	}, []);

	const privRoutes = useMemo(() => {
		if (privateRoutes && isLogged) {
			const routes = privateRoutes.map((item) => (
				<Route {...item.route} key={item.key} />
			));
			return routes;
		}
		return null;
	}, []);

	return (
		<BrowserRouter>
			<CssBaseline />
			<Header isLogged={isLogged} logout={logout} login={login} />
			<Switch>
				<Layout>
					<Suspense fallback={<Loading />}>
						{pubRoutes}
						{privRoutes}
					</Suspense>
				</Layout>
				<Route component={() => <h1>404</h1>} />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
