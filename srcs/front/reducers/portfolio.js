export const dummy = {
	about_title: "About Myself",
	about_sub_title: "HELLO",
	about_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a dui sapien. Praesent ornare augue sit amet tellus aliquam volutpat. Nam ornare sagittis sapien ut dictum. Pellentesque laoreet augue risus, sit amet suscipit metus pellentesque id. Sed sit amet luctus neque. Ut rhoncus magna eu suscipit commodo. Aliquam eu aliquam augue. Morbi quam justo, eleifend eget velit vel, tempus sodales elit. Mauris consequat viverra finibus. Integer dignissim, elit vel suscipit bibendum, dolor ipsum scelerisque nulla, non vehicula massa magna non leo. Cras sapien nulla, mollis eget velit ac, condimentum hendrerit odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec non velit eget metus consequat ornare.\nSed et erat a tellus euismod iaculis vel vitae massa. Vivamus et sem scelerisque, finibus est quis, mattis sapien. Nunc ullamcorper purus quis aliquet maximus. Sed ornare, lacus non congue elementum, elit neque ornare ipsum, vel fermentum ligula arcu in ante. Vestibulum ante sem, consectetur nec maximus in, feugiat et urna. Suspendisse porttitor nulla sed suscipit venenatis. Etiam a turpis finibus, dapibus nisi at, viverra tellus. Aenean quis ultrices arcu, in pharetra neque. Sed posuere rhoncus aliquam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed quis odio elit. Ut eu scelerisque tortor, sed tincidunt risus. Sed sagittis urna diam, at commodo enim mollis sit amet.",
	ability_title: "What can I do",
	ability_sub_title: "Abilities",
	work_title: "My Works",
	work_sub_title: "Portfolio",
	email: "anhs0220@gmail.com",
	github: "https://github.com/GitSeob/MyPortfolio",
	kakao: "ewq1a",
	comment: "지존 홍섭S2",
	ability_attribute: [{
			name: '개잘생김',
			list: ["test1", "test2", "test3", "test4"]
		},{
			name: '노래잘부름',
			list: ['2017년 화양리 지그재그 신년회 노래자랑 1등',
					'2018년 화양리 지그재그 신년회 노래자랑 1등',]
	}],
	work_attribute : [{
		imgPath: './images/test_mac.png',
		proj_name: 'SEMO:세모',
		category: 'web',
		period: "2020-01-01 ~ 2020-01-02",
		members: 4,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at venenatis neque, sed scelerisque risus. Vivamus nulla tortor, imperdiet vitae tempor et, vestibulum id dui. Aenean dignissim, nisl non tristique dignissim, nisl lorem ultrices nibh, suscipit consectetur ipsum mauris sit.',
		repo: 'https://github.com/GitSeob/MyPortfolio',
		table_rows: [{
			col1: '11111111',
			col2: '22222222',
			col3: '33333333',
		},{
			col1: '11111111',
			col2: '22222222',
			col3: '33333333',
		}, {
			col1: '11111111',
			col2: '22222222',
			col3: '33333333',
		}]
	},{
		imgPath: './images/test_mac.png',
		proj_name: 'SEMO:세모',
		category: 'web',
		period: "2020-01-01 ~ 2020-01-02",
		members: 4,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at venenatis neque, sed scelerisque risus. Vivamus nulla tortor, imperdiet vitae tempor et, vestibulum id dui. Aenean dignissim, nisl non tristique dignissim, nisl lorem ultrices nibh, suscipit consectetur ipsum mauris sit.',
		repo: 'https://github.com/GitSeob/MyPortfolio',
		table_rows: [{
			col1: '11111111',
			col2: '22222222',
			col3: '33333333',
		},{
			col1: '11111111',
			col2: '22222222',
			col3: '33333333',
		}, {
			col1: '11111111',
			col2: '22222222',
			col3: '33333333',
		}]
	},],
};

export const initialState = {
	isLoaded: false,
	data: dummy,
}


export const LOAD_DATA_REQUEST = 'LOAD_DATA_REQUEST';
export const LOAD_DATA_SUCCUESS = 'LOAD_DATA_SUCCUESS';
export const LOAD_DATA_FAILURE = 'LOAD_DATA_FAILURE';

export const ABOUT_EDIT_REQUEST = 'ABOUT_EDIT_REQUEST';
export const ABOUT_EDIT_SUCCESS = 'ABOUT_EDIT_SUCCESS';
export const ABOUT_EDIT_FAILURE = 'ABOUT_EDIT_FAILURE';

export const FOOTER_EDIT_REQUEST = 'FOOTER_EDIT_REQUEST';
export const FOOTER_EDIT_SUCCESS = 'FOOTER_EDIT_SUCCESS';
export const FOOTER_EDIT_FAILURE = 'FOOTER_EDIT_FAILURE';

export const LINK_EDIT_REQUEST = 'LINK_EDIT_REQUEST';
export const LINK_EDIT_SUCCESS = 'LINK_EDIT_SUCCESS';
export const LINK_EDIT_FAILURE = 'LINK_EDIT_FAILURE';

export const ABILITY_ADD_REQUEST = 'ABILITY_ADD_REQUEST';
export const ABILITY_ADD_SUCCESS = 'ABILITY_ADD_SUCCESS';
export const ABILITY_ADD_FAILURE = 'ABILITY_ADD_FAILURE';

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

// export const WORK_IMG_ADD_REQUEST = 'WORK_IMG_ADD_REQUEST';
// export const WORK_IMG_ADD_SUCCESS = 'WORK_IMG_ADD_SUCCESS';
// export const WORK_IMG_ADD_FAILURE = 'WORK_IMG_ADD_FAILURE';

// export const WORK_IMG_DELETE_REQUEST = 'WORK_IMG_DELETE_REQUEST';
// export const WORK_IMG_DELETE_SUCCESS = 'WORK_IMG_DELETE_SUCCESS';
// export const WORK_IMG_DELETE_FAILURE = 'WORK_IMG_DELETE_FAILURE';

export const ADD_DUMY = 'ADD_DUMY';

// ###########################################################################################
// ###########################################################################################
// ###########################################################################################
// ###########################################################################################

const portfolio = (state=initialState, action) => {
	switch (action.type) {
		case LOAD_DATA_REQUEST: {
			return {
				...state,
			}
		}
		case LOAD_DATA_SUCCUESS: {
			return {
				...state,
				data: dummy,
				isLoaded: true,
			}
		}
		case LOAD_DATA_FAILURE: {
			return {
				...state,
				isLoaded: false,
			}
		}
		case ADD_DUMY: {
			return {
				...state,
				data: dummy,
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
