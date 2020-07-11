import produce from '../util/produce';

const initialState = {
	isLoaded: false,
	data: null,
	workComponentIndex: -1,
	imageWillChanged: '',
	isAddedAbility: false,
	isEditedWork: false,
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
export const RESET_ADD_ABILITY_STATUS = 'RESET_ADD_ABILITY_STATUS';
export const RESET_EDIT_WORK_STATUS = 'RESET_EDIT_WORK_STATUS';

export const ADD_DUMY = 'ADD_DUMY';

// ###########################################################################################
// ###########################################################################################
// ###########################################################################################
// ###########################################################################################

const reducer = (state=initialState, action) => produce(state, (draft) => {
	switch (action.type) {
		case LOAD_PORT_DATA_REQUEST: {
			break;
		}
		case LOAD_PORT_DATA_SUCCESS: {
			draft.data = action.data;
			break;
		}
		case LOAD_PORT_DATA_FAILURE: {
			draft.editPortErrorReason = action.error;
			break;
		}

		case PORT_EDIT_REQUEST: {
			break;
		}
		case PORT_EDIT_SUCCESS: {
			draft.data = action.data;
			break;
		}
		case PORT_EDIT_FAILURE: {
			draft.isLoaded = false;
			break;
		}

		case ABILITY_ADD_REQUEST: {
			break;
		}
		case ABILITY_ADD_SUCCESS: {
			draft.data.Abilities.push(action.data);
			draft.isAddedAbility = true;
			break;
		}
		case ABILITY_ADD_FAILURE: {
			draft.addAbilityErrorReason = action.error;
			break;
		}

		case ABILITY_EDIT_ONLY_ATTR_REQUEST:
		case ABILITY_EDIT_ONLY_TITLE_REQUEST:
		case ABILITY_EDIT_REQUEST:
		case ABILITY_DELETE_REQUEST: {
			break;
		}

		case ABILITY_EDIT_ONLY_ATTR_SUCCESS:
		case ABILITY_EDIT_ONLY_TITLE_SUCCESS:
		case ABILITY_EDIT_SUCCESS: {
			draft.data.Abilities = action.data;
			draft.isAddedAbility = true;
			break;
		}
		case ABILITY_DELETE_SUCCESS: {
			draft.data.Abilities = action.data;
			break;
		}


		case ABILITY_DELETE_FAILURE: {
			draft.removeAbilityErrorReason = action.error;
			break;
		}

		case ABILITY_EDIT_ONLY_ATTR_FAILURE:
		case ABILITY_EDIT_ONLY_TITLE_FAILURE:
		case ABILITY_EDIT_FAILURE: {
			draft.editAbilityErrorReason = action.error;
			break;
		}

		case WORK_EDIT_REQUEST:
		case WORK_DELETE_REQUEST:
		case WORK_ADD_REQUEST: {
			break;
		}
		case WORK_EDIT_SUCCESS: {
			draft.data.Works = action.data;
			draft.isEditedWork = true;
			break;
		}
		case WORK_EDIT_FAILURE: {
			draft.editWorkErrorReason = action.error;
			break;
		}

		case WORK_DELETE_SUCCESS: {
			const indez = draft.data.Works.findIndex(v => v.id === action.data);
			draft.data.Works.splice(index, 1);
			break;
		}
		case WORK_DELETE_FAILURE: {
			draft.deleteWorkErrorReason = action.error;
			break;
		}

		case WORK_ADD_SUCCESS: {
			draft.data.Works.push(action.data);
			break;
		}
		case WORK_ADD_FAILURE: {
			draft.addWorkErrorReason = action.error;
			break;
		}

		case CLICK_WORK_LIST: {
			draft.workComponentIndex = action.data;
			break;
		}

		case RESET_ADD_ABILITY_STATUS: {
			draft.isAddedAbility = false;
			break;
		}

		case RESET_EDIT_WORK_STATUS: {
			draft.isEditedWork = false;
			break;
		}

		default: {
			break;
		}
	}
});

export default reducer;
