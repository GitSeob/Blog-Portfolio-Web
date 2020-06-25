const initialState = {
	blogTitle: '블로그',
	description: 'anjoy의 블로그',
	faviconURL: 'http://localhost:3065/globalImg/favicon.ico'
}

export const LOAD_INFORMATION_REQUEST = 'LOAD_INFORMATION_REQUEST';
export const LOAD_INFORMATION_SUCCESS = 'LOAD_INFORMATION_SUCCESS';
export const LOAD_INFORMATION_FAILURE = 'LOAD_INFORMATION_FAILURE';

export const EDIT_INFORMATION_REQUEST = 'EDIT_INFORMATION_REQUEST';
export const EDIT_INFORMATION_SUCCESS = 'EDIT_INFORMATION_SUCCESS';
export const EDIT_INFORMATION_FAILURE = 'EDIT_INFORMATION_FAILURE';

const information = (state=initialState, action) => {
	switch(action.type) {
		case LOAD_INFORMATION_REQUEST: {
			return {
				...state,
			}
		}
		case LOAD_INFORMATION_SUCCESS: {
			return {
				...state,
			}
		}
		case LOAD_INFORMATION_FAILURE: {
			return {
				...state,
			}
		}

		case EDIT_INFORMATION_REQUEST: {
			return {
				...state,
			}
		}
		case EDIT_INFORMATION_SUCCESS: {
			return {
				...state,
			}
		}
		case EDIT_INFORMATION_FAILURE: {
			return {
				...state,
			}
		}

		default: {
			return {
				...state,
			}
		}
	}
}

export default information;
