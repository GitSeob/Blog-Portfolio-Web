import produce from 'immer';

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

export const CHANGE_SELECTED_POSTS_CATEGORY_REQUEST = 'CHANGE_SELECTED_POSTS_CATEGORY_REQUEST';
export const CHANGE_SELECTED_POSTS_CATEGORY_SUCCESS = 'CHANGE_SELECTED_POSTS_CATEGORY_SUCCESS';
export const CHANGE_SELECTED_POSTS_CATEGORY_FAILURE = 'CHANGE_SELECTED_POSTS_CATEGORY_FAILURE';

const posts = (state=initialState, action) => {
	return produce(state, (draft) => {
		switch (action.type) {
			case OPEN_POSTING: {
				draft.postingWindowOpen = true;
				draft.isEditedPost = false;
				draft.isAddedPost = false;
				break;
			}
			case CLOSE_POSTING: {
				draft.postingWindowOpen = false;
				draft.postEditMode = false;
				draft.isEditedPost = false;
				break;
			}

			case ON_EDIT: {
				draft.postEditMode = true;
				break;
			}
			case OFF_EDIT: {
				draft.postEditMode = false;
				break;
			}

			case LOAD_MAIN_POSTS_REQUEST: {
				draft.mainPosts = [];
				break;
			}
			case LOAD_MAIN_POSTS_SUCCESS: {
				draft.mainPosts = action.data;
				draft.isAddedPost = false;
				draft.isEditedPost = false;
				draft.isRemovedPost = false;
				draft.boardTitle = '전체';
				break;
			}
			case LOAD_MAIN_POSTS_FAILURE: {
				break;
			}

			case LOAD_CATEGORY_POSTS_REQUEST: {
				draft.isLoadingPosts = true;
				break;
			}
			case LOAD_CATEGORY_POSTS_SUCCESS: {
				draft.isLoadingPosts = false;
				draft.mainPosts = action.data.posts;
				draft.boardTitle = action.data.name;
				break;
			}
			case LOAD_CATEGORY_POSTS_FAILURE: {
				draft.isLoadingPosts = false;
				draft.errorReason = action.error;
			}

			case LOAD_CATEGORY_REQUEST:
			case LOAD_CATEGORY_FAILURE: {
				break;
			}
			case LOAD_CATEGORY_SUCCESS: {
				draft.category_list = action.data;
				break;
			}

			case ADD_POST_REQUEST: {
				draft.isAddingPost = true;
				break;
			}
			case ADD_POST_SUCCESS: {
				draft.isAddingPost = false;
				draft.isAddedPost = true;
				draft.mainPosts.unshift(action.data);
				break;
			}
			case ADD_POST_FAILURE: {
				draft.isAddingPost = false;
				draft.errorReason = action.error;
				break;
			}

			case LOAD_ONE_POST_REQUEST: {
				draft.postData= null;
				break;
			}
			case LOAD_ONE_POST_SUCCESS: {
				draft.postData = action.data;
				break;
			}
			case LOAD_ONE_POST_FAILURE: {
				draft.errorReason = action.error;
				break;
			}

			case EDIT_POST_REQUEST: {
				draft.isEdittingPost = true;
				break;
			}
			case EDIT_POST_SUCCESS: {
				draft.isEdittingPost = false;
				draft.isEditedPost = true;
				draft.postData = action.data;
				const index = draft.mainPosts.findIndex(v => v.id === action.data.id);
				draft.mainPosts.splice(index, 1, action.data);
				break;
			}
			case EDIT_POST_FAILURE: {
				draft.isEdittingPost = false;
				draft.errorReason = action.error;
				break;
			}

			case REMOVE_POST_REQUEST: {
				draft.isRemovingPost = true;
				break;
			}
			case REMOVE_POST_SUCCESS: {
				draft.isRemovingPost = false;
				draft.isRemovedPost = true;
				const index = draft.mainPosts.findIndex(v => v.id === action.data);
				draft.mainPosts.splice(index, 1);
				break;
			}
			case REMOVE_POST_FAILURE: {
				draft.isRemovingPost = false;
				draft.errorReason = action.error;
			}

			case SEARCH_POSTS_REQUEST: {
				draft.isLoadingPosts = true;
				break;
			}
			case SEARCH_POSTS_SUCCESS: {
				draft.isLoadingPosts = false;
				draft.isLoadedPosts = true;
				draft.mainPosts = action.data.posts;
				draft.boardTitle = action.data.keyword;
				break;
			}
			case SEARCH_POSTS_FAILURE: {
				draft.isLoadingPosts = false;
				errorReason = action.error;
				break;
			}

			case EDIT_CATEGORY_REQUEST:
			case ADD_CATEGORY_REQUEST:
			case REMOVE_CATEGORY_REQUEST:
			case EDIT_POST_MANAGE_REQUEST:
			case CHANGE_SELECTED_POSTS_CATEGORY_REQUEST: {
				break;
			}
			case REMOVE_SELECTED_POST_REQUEST: {
				draft.isRemovingPost = true;
				break;
			}
			case REMOVE_SELECTED_POST_REQUEST: {
				draft.isRemovingPost = true;
				break;
			}

			case REMOVE_CATEGORY_SUCCESS: {
				const index = draft.category_list.findIndex(v => v.id === action.data.cateogry_id);
				draft.mainPosts = action.data.posts;
				draft.category_list.splice(index, 1);
				break;
			}

			case EDIT_POST_MANAGE_SUCCESS: {
				draft.postingWindowOpen = true;
				draft.isEdittingPost = false;
				draft.isAddedPost = false;
				draft.postEditMode = true;
				draft.postData = action.data;
				break;
			}
			case REMOVE_SELECTED_POST_SUCCESS: {
				draft.isRemovingPost = false;
				draft.isRemovedPost = true;
				draft.mainPosts = action.data;
				break;
			}

			case CHANGE_SELECTED_POSTS_CATEGORY_SUCCESS: {
				draft.mainPosts = action.data;
				break;
			}


			case EDIT_CATEGORY_SUCCESS: {
				draft.category_list = action.data.category;
				draft.mainPosts = action.data.posts;
				break;
			}

			case ADD_CATEGORY_SUCCESS: {
				draft.category_list.push(action.data);
				break;
			}

			case ADD_CATEGORY_FAILURE:
			case EDIT_CATEGORY_FAILURE:
			case REMOVE_CATEGORY_FAILURE:
			case EDIT_POST_MANAGE_FAILURE:
			case CHANGE_SELECTED_POSTS_CATEGORY_FAILURE: {
				draft.errorReason = action.error;
				break;
			}
			case REMOVE_SELECTED_POST_FAILURE: {
				draft.isRemovingPost = false;
				break;
			}

			default: {
				break;
			}
		}
	})
}

export default posts
