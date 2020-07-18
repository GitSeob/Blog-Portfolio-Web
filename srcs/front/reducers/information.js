import produce from '../util/produce';

const initialState = {
	blogTitle: '',
	description: '',
	faviconURL: '',
	IconURLWillChanged: '',
	imgUploadError: '',
	isLoading: false,
	loadInfoErrorReason: '',
	editInfoErrorReason: '',
}

export const LOAD_INFORMATION_REQUEST = 'LOAD_INFORMATION_REQUEST';
export const LOAD_INFORMATION_SUCCESS = 'LOAD_INFORMATION_SUCCESS';
export const LOAD_INFORMATION_FAILURE = 'LOAD_INFORMATION_FAILURE';

export const EDIT_INFORMATION_REQUEST = 'EDIT_INFORMATION_REQUEST';
export const EDIT_INFORMATION_SUCCESS = 'EDIT_INFORMATION_SUCCESS';
export const EDIT_INFORMATION_FAILURE = 'EDIT_INFORMATION_FAILURE';

export const UPLOAD_FAV_REQUEST = 'UPLOAD_FAV_REQUEST';
export const UPLOAD_FAV_SUCCESS = 'UPLOAD_FAV_SUCCESS';
export const UPLOAD_FAV_FAILURE = 'UPLOAD_FAV_FAILURE';

export const RESET_CHANGED_FAVICON = 'RESET_CHANGED_FAVICON';

const reducer = (state=initialState, action) => produce(state, (draft) => {
	switch(action.type) {
		case LOAD_INFORMATION_REQUEST: {
			break;
		}
		case LOAD_INFORMATION_SUCCESS: {
			draft.blogTitle = action.data.title;
			draft.description = action.data.description;
			draft.faviconURL = action.data.favicon_url;
			draft.IconURLWillChanged = action.data.favicon_url;
			break;
		}
		case LOAD_INFORMATION_FAILURE: {
			break;
		}

		case EDIT_INFORMATION_REQUEST: {
			draft.isLoading = true;
			break;
		}
		case EDIT_INFORMATION_SUCCESS: {
			draft.blogTitle = action.data.title;
			draft.description = action.data.description;
			draft.faviconURL = action.data.favicon_url;
			draft.IconURLWillChanged = action.data.favicon_url;
			draft.isLoading = false;
			break;
		}
		case EDIT_INFORMATION_FAILURE: {
			draft.isLoading = false;
			draft.editInfoErrorReason = action.error;
			break;
		}

		case UPLOAD_FAV_REQUEST: {
			break;
		}
		case UPLOAD_FAV_SUCCESS: {
			draft.IconURLWillChanged = action.data;
			break;
		}
		case UPLOAD_FAV_FAILURE: {
			draft.imgUploadError = action.error;
			break;
		}

		case RESET_CHANGED_FAVICON: {
			draft.IconURLWillChanged = action.data;
			break;
		}

		default: {
			break;
		}
	}
});

export default reducer;
