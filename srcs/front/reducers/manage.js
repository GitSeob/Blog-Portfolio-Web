const initialState = {
	menuStatus: {
		main: true,
		blog: false,
		port: false,
	},
}

export const SET_MAIN = 'SET_MAIN';
export const SET_BLOG = 'SET_BLOG';
export const SET_PORT = 'SET_PORT';

const manage = (state=initialState, action) => {
	switch(action.type) {
		case SET_MAIN: {
			return {
				...state,
				menuStatus: {
					main: true,
					blog: false,
					port: false,
				}
			}
		}
		case SET_BLOG: {
			return {
				...state,
				menuStatus: {
					main: false,
					blog: true,
					port: false,
				}
			}
		}
		case SET_PORT: {
			return {
				...state,
				menuStatus: {
					main: false,
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
