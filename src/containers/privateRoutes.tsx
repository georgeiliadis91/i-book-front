import { lazy } from 'react';
import { IRoutes } from '../entinties/routes';

const Profile = lazy(() => import('./private/profile'));

const privateRoutes: IRoutes[] = [
	{
		key: 1,
		title: 'Profile',
		link: '/profile',
		route: {
			exact: true,
			path: '/profile',
			component: Profile,
		},
	},
];

export default privateRoutes;
