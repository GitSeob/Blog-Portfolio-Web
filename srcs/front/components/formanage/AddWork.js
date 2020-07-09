import React, { useCallback, useState } from 'react';

const AddWork = ({ addWorkName, OCAddWorkName, cancelAddWork }) => {
	return (
		<>
		<form className="manage-bundle-list add-cate-container">
			<input className="add-cate-ipt" type="text" value={addWorkName} onChange={OCAddWorkName} placeholder="WORK 이름을 입력해주세요." required/>
			<div className="manage-btn-container">
				<button type='reset' className="manage-cate-btn" onClick={cancelAddWork}>
					취소
				</button>
				<button className="manage-cate-btn">
					테이블 행 추가하기
				</button>
			</div>
		</form>
		</>
	)
}

export default AddWork;
