import { IAuthor } from './author';

export interface IBook {
	id: number;
	name: string;
	image?: string[];
	price: number;
	sn: number;
	description: string;
	author: IAuthor[];
}
