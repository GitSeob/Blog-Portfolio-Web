import produce from 'immer';

const initialState = {
	menuStatus: {
		blog: true,
		port: false,
	},
}

export const SET_BLOG = 'SET_BLOG';
export const SET_PORT = 'SET_PORT';

const manage = (state=initialState, action) => {
	return produce(state, (draft) => {
		switch(action.type) {
			case SET_BLOG: {
				draft.menuStatus.blog = true;
				draft.menuStatus.port = false;
				break;
			}
			case SET_PORT: {
				draft.menuStatus.blog = false;
				draft.menuStatus.port = true;
				break;
			}
			default: {
				break;
			}
		}
	})
}

export default manage;
