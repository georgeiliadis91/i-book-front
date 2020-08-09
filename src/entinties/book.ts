import { IAuthor } from './author';

export interface IBook {
	ID: number;
	Title: string;
	image?: string[];
	price?: number;
	sn?: number;
	Description: string;
	Excerpt?: string;
	PublishDate?: Date;
	author?: IAuthor[];
	PageCount?: number;
}
