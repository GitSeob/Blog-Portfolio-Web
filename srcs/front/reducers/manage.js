const initialState = {
	menuStatus: {
		blog: true,
		port: false,
	},
}

export const SET_BLOG = 'SET_BLOG';
export const SET_PORT = 'SET_PORT';

const manage = (state=initialState, action) => {
	switch(action.type) {
		case SET_BLOG: {
			return {
				...state,
				menuStatus: {
					blog: true,
					port: false,
				}
			}
		}
		case SET_PORT: {
			return {
				...state,
				menuStatus: {
					blog: false,
					port: true,
				}
			}
		}
		default: {
			return {
				...state,
			}
		}
	}
}

export default manage;
