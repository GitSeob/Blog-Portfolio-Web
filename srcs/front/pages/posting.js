import React, {useState, useCallback} from 'react';
import dynamic from 'next/dynamic'

import {MenuBar, MainHeader} from './blog';

const Ckeditor = dynamic(() => import ("../components/Ckeditor"), {
	ssr: false
})



const Posting = props => {
	const [onMenu, setMenu] = useState(false);
	const [onSearch, setSearch] = useState(false);

	const changeMenu = useCallback(onMenu => () => {
		if(onMenu) {
			setMenu(false);
		} else {
			setMenu(true);
		}
	}, [onMenu]);
	const changeSearch = useCallback(onSearch => () => {
		if(onSearch) {
			setSearch(false);
		} else {
			setSearch(true);
		}
	}, [onSearch]);
	const openMenu = {
		left: `${onMenu ? 380 : 0}px`
	};

	return (
		<div id="post-wrap">
			<MenuBar onMenu={onMenu}/>
			<div id="post-container" style={openMenu}>
				<MainHeader onMenu={onMenu} changeMenu={changeMenu.bind(null, onMenu)} onSearch={onSearch} changeSearch={changeSearch.bind(null, onSearch)}/>
				<Ckeditor />
			</div>
		</div>
	);
};

Posting.propTypes = {

};

export default Posting;
