export const initialState = {
	isLoaded: false,
	data: null,
	workComponentIndex: -1,
	imageWillChanged: '',
	editPortErrorReason: '',
	addAbilityErrorReason: '',
	removeAbilityErrorReason: '',
	editAbilityErrorReason: '',
	editWorkErrorReason: '',
	deleteWorkErrorReason: '',
	addWorkErrorReason: '',
}


export const LOAD_PORT_DATA_REQUEST = 'LOAD_PORT_DATA_REQUEST';
export const LOAD_PORT_DATA_SUCCESS = 'LOAD_PORT_DATA_SUCCESS';
export const LOAD_PORT_DATA_FAILURE = 'LOAD_PORT_DATA_FAILURE';

export const PORT_EDIT_REQUEST = 'PORT_EDIT_REQUEST';
export const PORT_EDIT_SUCCESS = 'PORT_EDIT_SUCCESS';
export const PORT_EDIT_FAILURE = 'PORT_EDIT_FAILURE';

export const ABILITY_ADD_REQUEST = 'ABILITY_ADD_REQUEST';
export const ABILITY_ADD_SUCCESS = 'ABILITY_ADD_SUCCESS';
export const ABILITY_ADD_FAILURE = 'ABILITY_ADD_FAILURE';

export const ABILITY_EDIT_ONLY_TITLE_REQUEST = 'ABILITY_EDIT_ONLY_TITLE_REQUEST';
export const ABILITY_EDIT_ONLY_TITLE_SUCCESS = 'ABILITY_EDIT_ONLY_TITLE_SUCCESS';
export const ABILITY_EDIT_ONLY_TITLE_FAILURE = 'ABILITY_EDIT_ONLY_TITLE_FAILURE';

export const ABILITY_EDIT_ONLY_ATTR_REQUEST = 'ABILITY_EDIT_ONLY_ATTR_REQUEST';
export const ABILITY_EDIT_ONLY_ATTR_SUCCESS = 'ABILITY_EDIT_ONLY_ATTR_SUCCESS';
export const ABILITY_EDIT_ONLY_ATTR_FAILURE = 'ABILITY_EDIT_ONLY_ATTR_FAILURE';

export const ABILITY_EDIT_REQUEST = 'ABILITY_EDIT_REQUEST';
export const ABILITY_EDIT_SUCCESS = 'ABILITY_EDIT_SUCCESS';
export const ABILITY_EDIT_FAILURE = 'ABILITY_EDIT_FAILURE';

export const ABILITY_DELETE_REQUEST = 'ABILITY_DELETE_REQUEST';
export const ABILITY_DELETE_SUCCESS = 'ABILITY_DELETE_SUCCESS';
export const ABILITY_DELETE_FAILURE = 'ABILITY_DELETE_FAILURE';

export const WORK_ADD_REQUEST = 'WORK_ADD_REQUEST';
export const WORK_ADD_SUCCESS = 'WORK_ADD_SUCCESS';
export const WORK_ADD_FAILURE = 'WORK_ADD_FAILURE';

export const WORK_EDIT_REQUEST = 'WORK_EDIT_REQUEST';
export const WORK_EDIT_SUCCESS = 'WORK_EDIT_SUCCESS';
export const WORK_EDIT_FAILURE = 'WORK_EDIT_FAILURE';

export const WORK_DELETE_REQUEST = 'WORK_DELETE_REQUEST';
export const WORK_DELETE_SUCCESS = 'WORK_DELETE_SUCCESS';
export const WORK_DELETE_FAILURE = 'WORK_DELETE_FAILURE';

export const WORK_IMG_UPLOAD_REQUEST = 'WORK_IMG_UPLOAD_REQUEST';
export const WORK_IMG_UPLOAD_SUCCESS = 'WORK_IMG_UPLOAD_SUCCESS';
export const WORK_IMG_UPLOAD_FAILURE = 'WORK_IMG_UPLOAD_FAILURE';

export const CLICK_WORK_LIST = 'CLICK_WORK_LIST';

export const ADD_DUMY = 'ADD_DUMY';

// ###########################################################################################
// ###########################################################################################
// ###########################################################################################
// ###########################################################################################

const portfolio = (state=initialState, action) => {
	switch (action.type) {
		case LOAD_PORT_DATA_REQUEST: {
			return {
				...state,
			}
		}
		case LOAD_PORT_DATA_SUCCESS: {
			return {
				...state,
				data: action.data,
			}
		}
		case LOAD_PORT_DATA_FAILURE: {
			return {
				...state,
				editPortErrorReason: action.error,
			}
		}

		case PORT_EDIT_REQUEST: {
			return {
				...state,
			}
		}
		case PORT_EDIT_SUCCESS: {
			return {
				...state,
				data: action.data,
			}
		}
		case PORT_EDIT_FAILURE: {
			return {
				...state,
				isLoaded: false,
			}
		}

		case ABILITY_ADD_REQUEST: {
			return {
				...state,
			}
		}
		case ABILITY_ADD_SUCCESS: {
			return {
				...state,
				data: {
					...state.data,
					Abilities: [...state.data.Abilities, action.data],
				}
			}
		}
		case ABILITY_ADD_FAILURE: {
			return {
				...state,
				addAbilityErrorReason: action.error,
			}
		}

		case ABILITY_DELETE_REQUEST: {
			return {
				...state,
			}
		}
		case ABILITY_DELETE_SUCCESS: {
			return {
				...state,
				data: {
					...state.data,
					Abilities: action.data,
				}
			}
		}
		case ABILITY_DELETE_FAILURE: {
			return {
				...state,
				removeAbilityErrorReason: action.error
			}
		}

		case ABILITY_EDIT_REQUEST: {
			return {
				...state,
			}
		}
		case ABILITY_EDIT_SUCCESS: {
			return {
				...state,
				data: {
					...state.data,
					Abilities: action.data,
				}
			}
		}
		case ABILITY_EDIT_FAILURE: {
			return {
				...state,
				editAbilityErrorReason: action.error,
			}
		}

		case ABILITY_EDIT_ONLY_TITLE_REQUEST: {
			return {
				...state,
			}
		}
		case ABILITY_EDIT_ONLY_TITLE_SUCCESS: {
			return {
				...state,
				data: {
					...state.data,
					Abilities: action.data,
				}
			}
		}
		case ABILITY_EDIT_ONLY_TITLE_FAILURE: {
			return {
				...state,
				editAbilityErrorReason: action.error,
			}
		}

		case ABILITY_EDIT_ONLY_ATTR_REQUEST: {
			return {
				...state,
			}
		}
		case ABILITY_EDIT_ONLY_ATTR_SUCCESS: {
			return {
				...state,
				data: {
					...state.data,
					Abilities: action.data,
				}
			}
		}
		case ABILITY_EDIT_ONLY_ATTR_FAILURE: {
			return {
				...state,
				editAbilityErrorReason: action.error,
			}
		}

		case WORK_EDIT_REQUEST: {
			return {
				...state,
			}
		}
		case WORK_EDIT_SUCCESS: {
			return {
				...state,
				data: {
					...state.data,
					Works: action.data
				}
			}
		}
		case WORK_EDIT_FAILURE: {
			return {
				...state,
				editWorkErrorReason: action.error,
			}
		}

		case WORK_DELETE_REQUEST: {
			return {
				...state,
			}
		}
		case WORK_DELETE_SUCCESS: {
			return {
				...state,
				data: {
					...state.data,
					Works: state.data.Works.filter(v => v.id !== action.data)
				}
			}
		}
		case WORK_DELETE_FAILURE: {
			return {
				...state,
				deleteWorkErrorReason: action.error,
			}
		}

		case WORK_ADD_REQUEST: {
			return {
				...state,
			}
		}
		case WORK_ADD_SUCCESS: {
			return {
				...state,
				data: {
					...state.data,
					Works: [...state.data.Works, action.data]
				}
			}
		}
		case WORK_ADD_FAILURE: {
			return {
				...state,
				addWorkErrorReason: action.error,
			}
		}

		case CLICK_WORK_LIST: {
			return {
				...state,
				workComponentIndex: action.data,
			}
		}

		default: {
			return {
				...state,
			}
		}
	}
}

export default portfolio;
