import { IBook } from './book';

export interface IAuthor {
	name: string;
	birthdate: number;
	biography?: string;
	books?: IBook[];
}
