const initialState = {
	category_list: [],
	mainPosts: [],
	// 아래는 posting
	isAddingPost: false,
	isAddedPost: false,
	postData: null,
	isEdittingPost: false,
	isEditedPost: false,
	isRemovingPost: false,
	isRemovedPost: false,
	errorReason: '',
}

export const LOAD_MAIN_POSTS_REQUEST = 'LOAD_MAIN_POSTS_REQUEST';
export const LOAD_MAIN_POSTS_SUCCESS = 'LOAD_MAIN_POSTS_SUCCESS';
export const LOAD_MAIN_POSTS_FAILURE = 'LOAD_MAIN_POSTS_FAILURE';

export const LOAD_CATEGORY_REQUEST = 'LOAD_CATEGORY_REQUEST';
export const LOAD_CATEGORY_SUCCESS = 'LOAD_CATEGORY_SUCCESS';
export const LOAD_CATEGORY_FAILURE = 'LOAD_CATEGORY_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const EDIT_POST_REQUEST = 'EDIT_POST_REQUEST';
export const EDIT_POST_SUCCESS = 'EDIT_POST_SUCCESS';
export const EDIT_POST_FAILURE = 'EDIT_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const LOAD_ONE_POST_REQUEST = 'LOAD_ONE_POST_REQUEST';
export const LOAD_ONE_POST_SUCCESS = 'LOAD_ONE_POST_SUCCESS';
export const LOAD_ONE_POST_FAILURE = 'LOAD_ONE_POST_FAILURE';

export const CHANGE_MODE = 'CHANGE_MODE';

const posts = (state=initialState, action) => {
	switch (action.type) {
		case LOAD_MAIN_POSTS_REQUEST: {
			return {
				...state,
				mainPosts: [],
			};
		}
		case LOAD_MAIN_POSTS_SUCCESS: {
			return {
				...state,
				mainPosts: action.data,
			}
		}
		case LOAD_MAIN_POSTS_FAILURE: {
			return {
				...state,
			}
		}

		case LOAD_CATEGORY_REQUEST: {
			return {
				...state,
				category_list: [],
			};
		}
		case LOAD_CATEGORY_SUCCESS: {
			return {
				...state,
				category_list: action.data,
			}
		}
		case LOAD_CATEGORY_FAILURE: {
			return {
				...state,
			}
		}

		case ADD_POST_REQUEST: {
			return {
				...state,
				isAddingPost: true
			}
		}
		case ADD_POST_SUCCESS: {
			return {
				...state,
				isAddingPost: false,
				isAddedPost: true,
				mainPosts: [action.data, ...state.mainPosts],
			}
		}
		case ADD_POST_FAILURE: {
			return {
				...state,
				isAddingPost: false,
				errorReason: action.error,
			}
		}

		case LOAD_ONE_POST_REQUEST: {
			return {
				...state,
				postData: null,
			};
		}
		case LOAD_ONE_POST_SUCCESS: {
			return {
				...state,
				postData: action.data,
			};
		}
		case LOAD_ONE_POST_FAILURE: {
			return {
				...state,
				errorReason: action.error,
			};
		}

		case EDIT_POST_REQUEST: {
			return {
				...state,
				isEdittingPost: true,
			}
		}
		case EDIT_POST_SUCCESS: {
			return {
				...state,
				isEdittingPost: false,
				isEditedPost: true,
				postData: action.data,
			}
		}
		case EDIT_POST_FAILURE: {
			return {
				...state,
				isEdittingPost: false,
				errorReason: action.error,
			}
		}

		case REMOVE_POST_REQUEST: {
			return {
				...state,
				isRemovingPost: true,
			}
		}
		case REMOVE_POST_SUCCESS: {
			return {
				...state,
				isRemovingPost: false,
				isRemovedPost: true,
				mainPosts: state.mainPosts.filter(v => v.id !== action.data),
			}
		}
		case REMOVE_POST_FAILURE: {
			return {
				...state,
				isRemovingPost: false,
				errorReason: action.error,
			}
		}

		default: {
			return {
				...state,
			}
		}
	}
}

export default posts
