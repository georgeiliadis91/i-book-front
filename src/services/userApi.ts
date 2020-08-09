import { API } from '../helpers/api';

// TODO write a function that check if user exists.
const isValidUser = async (token: number) => {
	const call = new API();
	// const response = await call.get(`Books/${id}`);
	// return response;
	return true;
};

export { isValidUser };
