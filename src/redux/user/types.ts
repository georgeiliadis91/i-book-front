export const SIGNIN = 'SIGNIN';
export const SIGNOUT = 'SIGNOUT';

export interface IUserState {
	token: string;
}

interface ISignInAction {
	type: typeof SIGNIN;
	token: IUserState['token'];
}

interface ISignOutAction {
	type: typeof SIGNOUT;
}

export interface IUserActions {
	signIn: (token: IUserState['token']) => ISignInAction;
	signOut: () => ISignOutAction;
}

export type UserActionTypes = ISignInAction | ISignOutAction;
