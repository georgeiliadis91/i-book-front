import { lazy } from 'react';
import { IRoutes } from '../entinties/routes';

const Home = lazy(() => import('./public/home/'));
const About = lazy(() => import('./public/about'));
const Book = lazy(() => import('./public/book'));
const BookSearch = lazy(() => import('./public/booksearch'));
const Author = lazy(() => import('./public/author'));
const Login = lazy(() => import('./public/login'));
const Register = lazy(() => import('./public/register'));

const publicRoutes: IRoutes[] = [
	{
		key: 1,
		title: 'Home',
		link: ['/', '/home'],
		route: {
			exact: true,
			path: ['/', '/home'],
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
	{
		key: 3,
		title: 'Book',
		link: '/book/:id',
		route: {
			exact: true,
			path: '/book/:id',
			component: Book,
		},
	},
	{
		key: 4,
		title: 'Search',
		link: '/search/',
		route: {
			exact: true,
			path: '/search/',
			component: BookSearch,
		},
	},
	{
		key: 5,
		title: 'Author',
		link: '/author/:id',
		route: {
			exact: true,
			path: '/author/:ud',
			component: Author,
		},
	},
	{
		key: 6,
		title: 'Login',
		link: '/login',
		route: {
			exact: true,
			path: '/login',
			component: Login,
		},
	},
	{
		key: 7,
		title: 'Register',
		link: '/register',
		route: {
			exact: true,
			path: '/register',
			component: Register,
		},
	},
];

export default publicRoutes;
