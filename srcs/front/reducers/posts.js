const initialState = {
	onMenu: false,
	onSearch: false,
	category_list: [
		'카테고리 없음', 'test1', 'test2',
	],
	mainPosts: [{
		title: 'test',
		thumbnail_path: './images/profileImage.jpg',
		category: 'test_category',
		createdAt: '2020. 01. 01. 00:00',
		content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
	},{
		title: 'test',
		thumbnail_path: './images/profileImage.jpg',
		category: 'test_category',
		createdAt: '2020. 01. 01. 00:00',
		content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
	},{
		title: 'test',
		thumbnail_path: './images/profileImage.jpg',
		category: 'test_category',
		createdAt: '2020. 01. 01. 00:00',
		content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
	},{
		title: 'test',
		thumbnail_path: './images/profileImage.jpg',
		category: 'test_category',
		createdAt: '2020. 01. 01. 00:00',
		content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
	},],
	// 아래는 posting
	isAddingPost: false,
	isAddedPost: false,
	title: '',
	category_index: 0,
	content: '이곳에 내용을 입력해주세요',
	errorReason: '',
}

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

const posts = (state=initialState, action) => {
	switch (action.type) {
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
				errorReason: '어떠어떠해서 실패',
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
