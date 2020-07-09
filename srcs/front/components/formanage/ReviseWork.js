import React, {useState, useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Reorder, Add } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';

import {useSetInput} from './BlogManage';
import AddWork from './AddWork';
import OpenedWork from './OpenedWork';
import { CLICK_WORK_LIST } from '../../reducers/portfolio';

const ReviseWork = props => {
	const dispatch = useDispatch();
	const { data, workComponentIndex } = useSelector(state=>state.portfolio);

	// const [workComponentIndex, setWorkComponentIndex] = useState(-1);
	const [openAddWork, setOpenAddWork] = useState(false);

	const openWork = useCallback((i) => (e) => {
		e.preventDefault();
		dispatch({
			type: CLICK_WORK_LIST,
			data: i,
		})
		// setWorkComponentIndex(i);
	}, [workComponentIndex]);

	const closeWork = useCallback((e) => {
		e.preventDefault();
		// setWorkComponentIndex(-1);
		dispatch({
			type: CLICK_WORK_LIST,
			data: -1,
		})
	}, [workComponentIndex])

	const open_add_work = useCallback((e) => {
		e.preventDefault();
		setOpenAddWork(true);
	}, [openAddWork]);

	const close_add_work = useCallback((e) => {
		e.preventDefault();
		setOpenAddWork(false);
	}, [openAddWork]);

	const cancelAddWork = useCallback((e) => {
		e.preventDefault();
		setOpenAddWork(false);
	}, [openAddWork])

	const clickedCancelEditWorkBtn = useCallback((e) => {
		e.preventDefault();
	})

	const clickedAbilWorkBtn = useCallback((i, c) => (e) => {
		e.preventDefault();
	})

	const removeWork = useCallback((c) => (e) => {
		e.preventDefault();
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
										<button className="manage-bundle-list"  onClick={workComponentIndex !== i ? openWork(i) : closeWork}>
											<Reorder style={{position: 'absolute', left: 0, top: '50%',fontSize: "16px", color: "#B4BAC2", transform: 'translate(50%, -50%)'}}/>
											{c.proj_name}
										</button>
										{ workComponentIndex === i && <OpenedWork works={c} idx={i} />}
									</div>
								);
							})
						}
						{openAddWork &&
							<AddWork close_add_work={close_add_work} />
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
