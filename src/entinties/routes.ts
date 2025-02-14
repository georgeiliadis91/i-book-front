import { RouteProps } from 'react-router-dom';

export interface IRoutes {
	key: number;
	title: string;
	link: string | string[];
	route: RouteProps;
}
