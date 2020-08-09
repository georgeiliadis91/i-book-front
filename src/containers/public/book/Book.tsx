import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBook } from '../../../services/bookApi';
import { IBook } from '../../../entinties/book';
import BookDisplay from './components/BookDisplay';
import Loading from '../../../components/share/Loading';
interface Props {}

const Book: React.FC<Props> = () => {
	const { id } = useParams();
	const [book, setBook] = useState<IBook | undefined>();

	useEffect(() => {
		const fetchData = async () => {
			const book = await getBook(id);
			setBook(book);
		};
		fetchData();
	}, []);

	return <div>{book ? <BookDisplay book={book} /> : <Loading />}</div>;
};

export default Book;
