const initialState = {
	isLoggedIn: false,
	isLoggingIn: false,
	isLoggingOut: false,
	logInErrorReason: '',
	admin: null,
}

export const LOGIN_ADMIN_REQUEST = 'LOGIN_ADMIN_REQUEST';
export const LOGIN_ADMIN_SUCCESS = 'LOGIN_ADMIN_SUCCESS';
export const LOGIN_ADMIN_FAILURE = 'LOGIN_ADMIN_FAILURE';

export const LOGOUT_ADMIN_REQUEST = 'LOGOUT_ADMIN_REQUEST';
export const LOGOUT_ADMIN_SUCCESS = 'LOGOUT_ADMIN_SUCCESS';
export const LOGOUT_ADMIN_FAILURE = 'LOGOUT_ADMIN_FAILURE';

export const EDIT_ABOUT_REQUEST = 'EDIT_ABOUT_REQUEST';
export const EDIT_ABOUT_SUCCESS = 'EDIT_ABOUT_SUCCESS';
export const EDIT_ABOUT_FAILURE = 'EDIT_ABOUT_FAILURE';

export const EDIT_ABILILTY_REQUEST = 'EDIT_ABILILTY_REQUEST';
export const EDIT_ABILILTY_SUCCESS = 'EDIT_ABILILTY_SUCCESS';
export const EDIT_ABILILTY_FAILURE = 'EDIT_ABILILTY_FAILURE';

export const REMOVE_ABILILTY_REQUEST = 'REMOVE_ABILILTY_REQUEST';
export const REMOVE_ABILILTY_SUCCESS = 'REMOVE_ABILILTY_SUCCESS';
export const REMOVE_ABILILTY_FAILURE = 'REMOVE_ABILILTY_FAILURE';

export const EDIT_WORK_REQUEST = 'EDIT_WORK_REQUEST';
export const EDIT_WORK_SUCCESS = 'EDIT_WORK_SUCCESS';
export const EDIT_WORK_FAILURE = 'EDIT_WORK_FAILURE';

export const REMOVE_WORK_REQUEST = 'REMOVE_WORK_REQUEST';
export const REMOVE_WORK_SUCCESS = 'REMOVE_WORK_SUCCESS';
export const REMOVE_WORK_FAILURE = 'REMOVE_WORK_FAILURE';

export const EDIT_GIT_REQUEST = 'EDIT_GIT_REQUEST';
export const EDIT_GIT_SUCCESS = 'EDIT_GIT_SUCCESS';
export const EDIT_GIT_FAILURE = 'EDIT_GIT_FAILURE';

export const EDIT_BLOG_REQUEST = 'EDIT_BLOG_REQUEST';
export const EDIT_BLOG_SUCCESS = 'EDIT_BLOG_SUCCESS';
export const EDIT_BLOG_FAILURE = 'EDIT_BLOG_FAILURE';

const dummy_admin = {
	id: 'anjoy1234',
	nickname: 'anjoy',
	permissionLV: 0,
}

const admin = (state=initialState, action) => {
	switch (action.type) {
		case LOGIN_ADMIN_REQUEST: {
			return {
				...state,
				isLoggingIn: true,
			};
		}
		case LOGIN_ADMIN_SUCCESS: {
			return {
				...state,
				isLoggedIn: true,
				isLoggingIn: false,
				admin: dummy_admin
			};
		}
		case LOGOUT_ADMIN_FAILURE: {
			return {
				...state,
				isLoggingIn: false,
			};
		}
		default: {
			return {
				...state,
			};
		}
	}
}

export default admin;
