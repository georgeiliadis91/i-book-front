import React from 'react';
import { useParams } from 'react-router-dom';

interface Props {}

// TODO make api call with author id.
const Author = (props: Props) => {
	const { id } = useParams();
	return <div>Author Page</div>;
};

export default Author;
