import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

const BlogManage = ({ category_list }) => {
	const [openAddCate, setOpenAddCate] = useState(false);
	const open_add_category = useCallback(() => {
		setOpenAddCate(true);
	}, []);
	const close_add_category = useCallback(() => {
		setOpenAddCate(false);
	}, []);



	return (
		<form>
			<div className="manage-line">
				<label className="manage-content-name" htmlFor="user-nickname" >블로그 타이틀</label>
				<br />
				<input name="user-nickname" placeholder="블로그 타이틀" required />
			</div>
			<div className="manage-line">
				<label className="manage-content-name" htmlFor="user-nickname" >카테고리</label>
				<br />
				<div className="manage-wrap-order">
					<div className="manage-list-order">
						{category_list.map((c, i) => {
							return (
								<div key={(i)} className="manage-bundle-list" >
									{c.name}
								</div>
							)
						})}
						<button className="manage-bundle-list" onClick={!openAddCate ? open_add_category : close_add_category}>
							카테고리 추가하기
						</button>
						{openAddCate &&
							<div className="manage-bundle-list">
								<input type="text" />
								<button>취소</button>
								<button>추가</button>
							</div>
						}
					</div>
				</div>
			</div>
		</form>
	);
};

BlogManage.propTypes = {

};

export default BlogManage;
