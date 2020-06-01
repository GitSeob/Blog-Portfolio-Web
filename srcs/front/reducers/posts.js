const initailState = {
	onMenu: false,
	onSearch: false,
	MainPosts: [],
}

const posts = (state=initailState, action) => {
	switch (action.type) {
		default: {
			return {
				...state,
			}
		}
	}
}

export default posts
