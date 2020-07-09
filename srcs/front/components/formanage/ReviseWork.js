import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import { Reorder, Add } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';

import {useSetInput} from './BlogManage';
import AddWork from './AddWork';
import OpenedWork from './OpenedWork';

const ReviseWork = props => {
	const { data } = useSelector(state=>state.portfolio);

	const [editWorkName, setEditWorkName, OCEditWorkName] = useSetInput('');
	const [workIndex, setWorkIndex] = useState(-1);
	const [openAddWork, setOpenAddWork] = useState(false);
	const [addWorkName, setAddWorkName, OCAddWorkName] = useSetInput('');

	const openWork = useCallback((i) => (e) => {
		e.preventDefault();
		setWorkIndex(i);
	}, [workIndex])

	const closeWork = useCallback((e) => {
		e.preventDefault();
		setWorkIndex(-1);
	})

	const open_add_work = useCallback((e) => {
		e.preventDefault();
		setOpenAddWork(true);
	}, []);
	const close_add_work = useCallback((e) => {
		e.preventDefault();
		setOpenAddWork(false);
	}, []);

	const cancelAddWork = useCallback((e) => {
		e.preventDefault();
		setAddWorkName('');
		setOpenAddWork(false);
	}, [])

	const clickedCancelEditWorkBtn = useCallback((e) => {
		e.preventDefault();
		setWorkIndex(-1);
	})

	const clickedAbilWorkBtn = useCallback((i, c) => (e) => {
		e.preventDefault();
		setEditWorkName(c.proj_name);
		setWorkIndex(i);
	})

	const removeWork = useCallback((i) => (e) => {
		e.preventDefault();
		console.log('remove work');
	});


	return (
		<div className="manage-attr-wrap">
			<h3>WORK 관리</h3>
			<br/>
			<div className="manage-content-wrap">
				<strong>이곳에서 포트폴리오의 WORK 정보를 관리할 수 있습니다.</strong>
				<p>각 항목을 수정하거나 삭제, 추가할 수 있습니다.</p>
				<div className="manage-wrap-order">
					<div className="manage-list-order">
						{
							data.Works.map((c, i) => {
								return (
									<div key={(i)}>
										<button className="manage-bundle-list"  onClick={workIndex !== i ? openWork(i): closeWork}>
											<Reorder style={{position: 'absolute', left: 0, top: '50%',fontSize: "16px", color: "#B4BAC2", transform: 'translate(50%, -50%)'}}/>
											{c.proj_name}
										</button>
										{ workIndex === i && <OpenedWork works={c} />}
									</div>
								);
							})
						}
						{openAddWork &&
							<AddWork addWorkName={addWorkName} OCAddWorkName={OCAddWorkName} cancelAddWork={cancelAddWork} />
						}
						<button className="manage-bundle-list" onClick={!openAddWork ? open_add_work : close_add_work}>
							< Add style={{position: 'absolute', left: 0, top: '50%',fontSize: "16px", color: "#B4BAC2", transform: 'translate(50%, -50%)'}} />
							WORK 데이터 추가하기
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

ReviseWork.propTypes = {

};

export default ReviseWork;
