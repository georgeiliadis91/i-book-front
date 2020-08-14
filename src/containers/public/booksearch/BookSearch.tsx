import React from 'react';
import { useBookQuery } from '../../../generated/graphql';

interface Props {}

const BookSearch: React.FC<Props> = () => {
	const { loading, error, data } = useBookQuery();

	if (loading || !data) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return (
		<div>
			{data.books?.map(
				(item?) =>
					item && (
						<div key={item.id}>
							<p>Title: {item.Title}</p>
							<p>Description: {item.Description}</p>
						</div>
					)
			)}
		</div>
	);
};

export default BookSearch;
