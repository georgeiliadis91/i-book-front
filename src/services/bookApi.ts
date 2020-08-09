import { API } from '../helpers/api';

const getBook = async (id: number) => {
	const call = new API();
	const response = await call.get(`Books/${id}`);
	return response;
};

export { getBook };
