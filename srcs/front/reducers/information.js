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
				blogTitle: action.data.title,
				description: action.data.description,
				faviconURL: action.data.favicon_url,
				IconURLWillChanged: action.data.favicon_url,
			}
		}
		case LOAD_INFORMATION_FAILURE: {
			return {
				...state,
				loadInfoErrorReason: action.error,
			}
		}

		case EDIT_INFORMATION_REQUEST: {
			return {
				...state,
				isLoading: true,
			}
		}
		case EDIT_INFORMATION_SUCCESS: {
			return {
				...state,
				blogTitle: action.data.title,
				description: action.data.description,
				faviconURL: action.data.favicon_url,
				IconURLWillChanged: action.data.favicon_url,
				isLoading: false,
			}
		}
		case EDIT_INFORMATION_FAILURE: {
			return {
				...state,
				isLoading: false,
				editInfoErrorReason: action.error,
			}
		}

		case UPLOAD_FAV_REQUEST: {
			return {
				...state,
			}
		}
		case UPLOAD_FAV_SUCCESS: {
			return {
				...state,
				IconURLWillChanged: action.data,
			}
		}
		case UPLOAD_FAV_FAILURE: {
			return {
				...state,
				imgUploadError: action.error,
			}
		}

		case RESET_CHANGED_FAVICON: {
			return {
				...state,
				IconURLWillChanged: action.data,
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
