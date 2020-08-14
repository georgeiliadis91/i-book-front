import { IUserActions, SIGNIN, SIGNOUT } from './types';

const userActions: IUserActions = {
	signIn: (token) => ({
		type: SIGNIN,
		token,
	}),
	signOut: () => ({
		type: SIGNOUT,
	}),
};

export default userActions;
