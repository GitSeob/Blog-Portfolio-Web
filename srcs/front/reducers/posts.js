const initialState = {
	category_list: [],
	mainPosts: [],
	boardTitle: '전체',
	// 아래는 posting
	isAddingPost: false,
	isAddedPost: false,
	postData: null,
	postEditMode: false,
	isEdittingPost: false,
	isEditedPost: false,
	isRemovingPost: false,
	isRemovedPost: false,
	isLoadingPosts: false,
	isLoadedPosts: false,
	postingWindowOpen: false,
	errorReason: '',
}

export const OPEN_POSTING = 'OPEN_POSTING';
export const CLOSE_POSTING = 'CLOSE_POSTING';

export const ON_EDIT = 'ON_EDIT';
export const OFF_EDIT = 'OFF_EDIT';

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

export const LOAD_CATEGORY_POSTS_REQUEST = 'LOAD_CATEGORY_POSTS_REQUEST';
export const LOAD_CATEGORY_POSTS_SUCCESS = 'LOAD_CATEGORY_POSTS_SUCCESS';
export const LOAD_CATEGORY_POSTS_FAILURE = 'LOAD_CATEGORY_POSTS_FAILURE';

export const SEARCH_POSTS_REQUEST = 'SEARCH_POSTS_REQUEST';
export const SEARCH_POSTS_SUCCESS = 'SEARCH_POSTS_SUCCESS';
export const SEARCH_POSTS_FAILURE = 'SEARCH_POSTS_FAILURE';

export const EDIT_CATEGORY_REQUEST = 'EDIT_CATEGORY_REQUEST';
export const EDIT_CATEGORY_SUCCESS = 'EDIT_CATEGORY_SUCCESS';
export const EDIT_CATEGORY_FAILURE = 'EDIT_CATEGORY_FAILURE';

export const ADD_CATEGORY_REQUEST = 'ADD_CATEGORY_REQUEST';
export const ADD_CATEGORY_SUCCESS = 'ADD_CATEGORY_SUCCESS';
export const ADD_CATEGORY_FAILURE = 'ADD_CATEGORY_FAILURE';

export const REMOVE_CATEGORY_REQUEST = 'REMOVE_CATEGORY_REQUEST';
export const REMOVE_CATEGORY_SUCCESS = 'REMOVE_CATEGORY_SUCCESS';
export const REMOVE_CATEGORY_FAILURE = 'REMOVE_CATEGORY_FAILURE';

export const EDIT_POST_MANAGE_REQUEST = 'EDIT_POST_MANAGE_REQUEST';
export const EDIT_POST_MANAGE_SUCCESS = 'EDIT_POST_MANAGE_SUCCESS';
export const EDIT_POST_MANAGE_FAILURE = 'EDIT_POST_MANAGE_FAILURE';

export const REMOVE_SELECTED_POST_REQUEST = 'REMOVE_SELECTED_POST_REQUEST';
export const REMOVE_SELECTED_POST_SUCCESS = 'REMOVE_SELECTED_POST_SUCCESS';
export const REMOVE_SELECTED_POST_FAILURE = 'REMOVE_SELECTED_POST_FAILURE';

const posts = (state=initialState, action) => {
	switch (action.type) {
		case OPEN_POSTING: {
			return {
				...state,
				postingWindowOpen: true,
				isEditedPost: false,
				isAddedPost: false,
			}
		}
		case CLOSE_POSTING: {
			return {
				...state,
				postingWindowOpen: false,
			}
		}

		case ON_EDIT: {
			return {
				...state,
				postEditMode: true,
			}
		}
		case OFF_EDIT: {
			return {
				...state,
				postEditMode: false,
			}
		}

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
				isAddedPost: false,
				isEditedPost: false,
				isRemovedPost: false,
				boardTitle: '전체',
			}
		}
		case LOAD_MAIN_POSTS_FAILURE: {
			return {
				...state,
			}
		}

		case LOAD_CATEGORY_POSTS_REQUEST: {
			return {
				...state,
				isLoadingPosts: true,
			};
		}
		case LOAD_CATEGORY_POSTS_SUCCESS: {
			return {
				...state,
				isLoadingPosts: false,
				mainPosts: action.data.posts,
				boardTitle: action.data.name,
			};
		}
		case LOAD_CATEGORY_POSTS_FAILURE: {
			return {
				...state,
				isLoadingPosts: false,
				errorReason: action.error,
			}
		}

		case LOAD_CATEGORY_REQUEST: {
			return {
				...state,
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

		case SEARCH_POSTS_REQUEST: {
			return {
				...state,
				isLoadingPosts: true,
			}
		}
		case SEARCH_POSTS_SUCCESS: {
			return {
				...state,
				isLoadingPosts: false,
				isLoadedPosts: true,
				mainPosts: action.data.posts,
				boardTitle: action.data.keyword,
			}
		}
		case SEARCH_POSTS_FAILURE: {
			return {
				...state,
				isLoadingPosts: false,
				errorReason: action.error,
			}
		}

		case EDIT_CATEGORY_REQUEST: {
			return {
				...state,
			}
		}
		case EDIT_CATEGORY_SUCCESS: {
			return {
				...state,
				category_list: action.data,
			}
		}
		case EDIT_CATEGORY_FAILURE: {
			return {
				...state,
			}
		}

		case ADD_CATEGORY_REQUEST: {
			return {
				...state,
			}
		}
		case ADD_CATEGORY_SUCCESS: {
			return {
				...state,
				category_list: [...state.category_list, action.data],
			}
		}
		case ADD_CATEGORY_FAILURE: {
			return {
				...state,
				errorReason: action.error,
			}
		}

		case REMOVE_CATEGORY_REQUEST: {
			return {
				...state,
			}
		}
		case REMOVE_CATEGORY_SUCCESS: {
			return {
				...state,
				category_list: state.category_list.filter(v => v.id !== action.data),
			}
		}
		case REMOVE_CATEGORY_FAILURE: {
			return {
				...state,
			}
		}

		case EDIT_POST_MANAGE_REQUEST: {
			return {
				...state,
			}
		}
		case EDIT_POST_MANAGE_SUCCESS: {
			return {
				...state,
				postingWindowOpen: true,
				isEditedPost: false,
				isAddedPost: false,
				postEditMode: true,
				postData: action.data,
			}
		}
		case EDIT_POST_MANAGE_FAILURE: {
			return {
				...state,
				errorReason: action.error
			}
		}

		case REMOVE_SELECTED_POST_REQUEST: {
			return {
				...state,
				isRemovingPost: true,
			}
		}
		case REMOVE_SELECTED_POST_SUCCESS: {
			return {
				...state,
				isRemovingPost: false,
				isRemovedPost: true,
				mainPosts: action.data,

			}
		}
		case REMOVE_SELECTED_POST_FAILURE: {
			return {
				...state,
				isRemovingPost: false,
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
