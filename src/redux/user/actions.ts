import { IUserActions, SIGNIN, SIGNOUT, REGISTER_USER } from './types';

const userActions: IUserActions = {
	signIn: (token) => ({
		type: SIGNIN,
		token,
	}),
	registerUser: (token) => ({
		type: REGISTER_USER,
		token,
	}),
	signOut: () => ({
		type: SIGNOUT,
	}),
};

export default userActions;
