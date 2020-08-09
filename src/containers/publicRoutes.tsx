import { lazy } from 'react';
import { IRoutes } from '../entinties/routes';

const Home = lazy(() => import('./public/home/'));
const About = lazy(() => import('./public/about'));

const publicRoutes: IRoutes[] = [
	{
		key: 1,
		title: 'Home',
		link: '/',
		route: {
			exact: true,
			path: '/',
			component: Home,
		},
	},
	{
		key: 2,
		title: 'About',
		link: '/about',
		route: {
			exact: true,
			path: '/about',
			component: About,
		},
	},
];

export default publicRoutes;
