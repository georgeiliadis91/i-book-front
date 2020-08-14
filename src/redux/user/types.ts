export const SIGNIN = 'SIGNIN';
export const SIGNOUT = 'SIGNOUT';
export const REGISTER_USER = 'REGISTER_USER';

export interface IUserState {
	token: string;
}

interface ISignInAction {
	type: typeof SIGNIN;
	token: IUserState['token'];
}

interface IRegisterUserAction {
	type: typeof REGISTER_USER;
	token: IUserState['token'];
}

interface ISignOutAction {
	type: typeof SIGNOUT;
}

export interface IUserActions {
	signIn: (token: IUserState['token']) => ISignInAction;
	registerUser: (token: IUserState['token']) => IRegisterUserAction;
	signOut: () => ISignOutAction;
}

export type UserActionTypes =
	| ISignInAction
	| ISignOutAction
	| IRegisterUserAction;
