import {
	IUserState,
	UserActionTypes,
	SIGNIN,
	SIGNOUT,
	REGISTER_USER,
} from './types';

// TODO save the real JWT token response
const initialState: IUserState = {
	token: localStorage.getItem('jwtToken') || '',
};

const userReducer = (
	state = initialState,
	action: UserActionTypes
): IUserState => {
	switch (action.type) {
		case SIGNIN:
			localStorage.setItem('jwtToken', action.token);
			return {
				...state,
				token: action.token,
			};
		case REGISTER_USER:
			localStorage.setItem('jwtToken', action.token);
			return {
				...state,
				token: action.token,
			};
		case SIGNOUT:
			localStorage.removeItem('jwtToken');
			return {
				...initialState,
				token: '',
			};
		default:
			return state;
	}
};

export default userReducer;
