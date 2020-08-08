import React, { lazy, Suspense, useMemo } from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loading from './components/ui/Loading';
import Layout from './components/ui/Layout';

// Routes
import publicRoutes from './containers/publicRoutes';

//

import Header from './components/ui/Layout/components/Header';
import Footer from './components/ui/Layout/components/Footer';

function App() {
	const pubRoutes = useMemo(() => {
		if (publicRoutes) {
			const routes = publicRoutes.map((item) => (
				<Route {...item.route} key={item.key} />
			));

			return routes;
		}

		return null;
	}, [publicRoutes]);

	console.log('thore are teh routes', pubRoutes);

	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Suspense fallback={<Loading />}>
					<Layout>{pubRoutes}</Layout>
				</Suspense>
				<Route component={() => <h1>404</h1>} />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
