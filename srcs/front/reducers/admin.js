import produce from '../util/produce';

const initialState = {
	isLoggedIn: false,
	isLoggingIn: false,
	isLoggingOut: false,
	logInErrorReason: '',
	isLoadingEditData: false,
	isLoadedEditData: false,
	admin: null,
}

export const LOAD_ADMIN_REQUEST = 'LOAD_ADMIN_REQUEST';
export const LOAD_ADMIN_SUCCESS = 'LOAD_ADMIN_SUCCESS';
export const LOAD_ADMIN_FAILURE = 'LOAD_ADMIN_FAILURE';

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

const reducer = (state=initialState, action) => produce(state, (draft) => {
	switch (action.type) {
		case LOAD_ADMIN_REQUEST: {
			break;
		}
		case LOAD_ADMIN_SUCCESS: {
			draft.admin = action.data;
		}
		case LOAD_ADMIN_FAILURE: {
			break;
		}

		case LOGIN_ADMIN_REQUEST: {
			draft.isLoggingIn = true;
			break;
		}
		case LOGIN_ADMIN_SUCCESS: {
			draft.isLoggedIn = true;
			draft.isLoggingIn = false;
			draft.admin = action.data;
			break;
		}
		case LOGIN_ADMIN_FAILURE: {
			draft.isLoggingIn = false;
			draft.admin = null;
			draft.logInErrorReason = action.error;
			break;
		}

		case LOGOUT_ADMIN_REQUEST: {
			draft.isLoggingOut = true;
			break;
		}
		case LOGOUT_ADMIN_SUCCESS: {
			draft.isLoggingOut = false;
			draft.isLoggedIn = false;
			draft.admin = null;
			break;
		}
		case LOGOUT_ADMIN_FAILURE: {
			draft.isLoggingOut = false;
			break;
		}
		default: {
			break;
		}
	}
})


export default reducer;
