import { all, fork, call, takeLatest, takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import {
	LOAD_PORT_DATA_REQUEST,
	LOAD_PORT_DATA_SUCCESS,
	LOAD_PORT_DATA_FAILURE,
	ABILITY_ADD_REQUEST,
	ABILITY_ADD_SUCCESS,
	ABILITY_ADD_FAILURE,
	ABILITY_DELETE_REQUEST,
	ABILITY_DELETE_SUCCESS,
	ABILITY_DELETE_FAILURE,
	ABILITY_EDIT_REQUEST,
	ABILITY_EDIT_SUCCESS,
	ABILITY_EDIT_FAILURE,
	ABILITY_EDIT_ONLY_ATTR_REQUEST,
	ABILITY_EDIT_ONLY_ATTR_SUCCESS,
	ABILITY_EDIT_ONLY_ATTR_FAILURE,
	ABILITY_EDIT_ONLY_TITLE_REQUEST,
	ABILITY_EDIT_ONLY_TITLE_SUCCESS,
	ABILITY_EDIT_ONLY_TITLE_FAILURE,
	WORK_EDIT_REQUEST,
	WORK_EDIT_SUCCESS,
	WORK_EDIT_FAILURE,
	WORK_DELETE_REQUEST,
	WORK_DELETE_SUCCESS,
	WORK_DELETE_FAILURE,
	WORK_ADD_REQUEST,
	WORK_ADD_SUCCESS,
	WORK_ADD_FAILURE,
	PORT_EDIT_REQUEST,
	PORT_EDIT_SUCCESS,
	PORT_EDIT_FAILURE,
} from '../reducers/portfolio';


function loadPortfolioAPI(){
	return axios.get('/portfolio', {
		withCredentials: true,
	});
};

function* loadPortfolio(action){
	try{
		const result = yield call(loadPortfolioAPI)
		// console.log(result.data);
		yield put({
			type: LOAD_PORT_DATA_SUCCESS,
			data: result.data
		})
	} catch(e){
		yield put({
			type: LOAD_PORT_DATA_FAILURE,
			error: e
		})
	}
}

function* watchLoadPort(){
	yield takeLatest(LOAD_PORT_DATA_REQUEST, loadPortfolio);
}

function editPortfolioAPI(portData){
	return axios.patch('/portfolio', portData, {
		withCredentials: true,
	});
};

function* editPortfolio(action){
	try{
		const result = yield call(editPortfolioAPI, action.data);
		yield put({
			type: PORT_EDIT_SUCCESS,
			data: result.data
		})
	} catch(e){
		yield put({
			type: PORT_EDIT_FAILURE,
			error: e
		})
	}
}

function* watchEditPortfolio(){
	yield takeLatest(PORT_EDIT_REQUEST, editPortfolio);
}


function addAbilityAPI(abilityData) {
	return axios.post('/portfolio/add/Ability', abilityData, {
		withCredentials: true,
	})
}

function* addAbility(action) {
	try {
		const result = yield call(addAbilityAPI, action.data);
		yield put({
			type: ABILITY_ADD_SUCCESS,
			data: result.data,
		})
	} catch (e) {
		console.error(e);
		yield put({
			type: ABILITY_ADD_FAILURE,
			error: e,
		})
	}
}

function* watchAddAbility() {
	yield takeLatest(ABILITY_ADD_REQUEST, addAbility);
}

function removeAbilityAPI(abilityId) {
	return axios.post('/portfolio/remove/ability', { abilityId: abilityId}, {
		withCredentials: true,
	})
}

function* removeAbility(action) {
	try {
		const result = yield call(removeAbilityAPI, action.id);
		yield put({
			type: ABILITY_DELETE_SUCCESS,
			data: result.data,
		})
	} catch (e) {
		console.error(e);
		yield put({
			type: ABILITY_DELETE_FAILURE,
			error: e,
		})
	}
}

function* watchRemoveAbility() {
	yield takeLatest(ABILITY_DELETE_REQUEST, removeAbility);
}

function editAbilityAPI(abilityData){
	return axios.post(`/portfolio/ability/edit/${abilityData.ability_id}`, abilityData, {
		withCredentials: true,
	})
}

function* editAbility(action) {
	try {
		const result = yield call(editAbilityAPI, action.data);
		yield put({
			type: ABILITY_EDIT_SUCCESS,
			data: result.data,
		})
	} catch(e) {
		console.error(e);
		yield put({
			type: ABILITY_EDIT_FAILURE,
			error: e,
		})
	}
}

function* watchEditAbility() {
	yield takeLatest(ABILITY_EDIT_REQUEST, editAbility);
}

function editAbilityOnlyTitleAPI(abilityData){
	return axios.post(`/portfolio/ability/EditTitle/${abilityData.ability_id}`, abilityData, {
		withCredentials: true,
	})
}

function* editAbilityOnlyTitle(action) {
	try {
		const result = yield call(editAbilityOnlyTitleAPI, action.data);
		yield put({
			type: ABILITY_EDIT_ONLY_TITLE_SUCCESS,
			data: result.data,
		})
	} catch(e) {
		console.error(e);
		yield put({
			type: ABILITY_EDIT_ONLY_TITLE_FAILURE,
			error: e,
		})
	}
}

function* watchEditAbilityOnlyTitle() {
	yield takeLatest(ABILITY_EDIT_ONLY_TITLE_REQUEST, editAbilityOnlyTitle);
}

function editAbilityOnlyAttrAPI(abilityData){
	return axios.post(`/portfolio/ability/EditAttr/${abilityData.ability_id}`, abilityData, {
		withCredentials: true,
	})
}

function* editAbilityOnlyAttr(action) {
	try {
		const result = yield call(editAbilityOnlyAttrAPI, action.data);
		yield put({
			type: ABILITY_EDIT_ONLY_ATTR_SUCCESS,
			data: result.data,
		})
	} catch(e) {
		console.error(e);
		yield put({
			type: ABILITY_EDIT_ONLY_ATTR_FAILURE,
			error: e,
		})
	}
}

function* watchEditAbilityOnlyAttr() {
	yield takeLatest(ABILITY_EDIT_ONLY_ATTR_REQUEST, editAbilityOnlyAttr);
}

function editWorkAPI(data){
	return axios.post(`/portfolio/work/${data.id}`, data, {
		withCredentials: true,
	})
}

function* editWork(action) {
	try {
		const result = yield call(editWorkAPI, action.data);
		yield put({
			type: WORK_EDIT_SUCCESS,
			data: result.data,
		})
	} catch(e) {
		console.error(e);
		yield put({
			type: WORK_EDIT_FAILURE,
			error: e,
		})
	}
}

function* watchEditWork() {
	yield takeLatest(WORK_EDIT_REQUEST, editWork);
}

function deleteWorkAPI(data){
	return axios.delete(`/portfolio/work/${data.id}`, data, {
		withCredentials: true,
	})
}

function* deleteWork(action) {
	try {
		const result = yield call(deleteWorkAPI, action.data);
		yield put({
			type: WORK_DELETE_SUCCESS,
			data: result.data,
		})
	} catch(e) {
		console.error(e);
		yield put({
			type: WORK_DELETE_FAILURE,
			error: e,
		})
	}
}

function* watchDeleteWork() {
	yield takeLatest(WORK_DELETE_REQUEST, deleteWork);
}

function addWorkAPI(data){
	return axios.post(`/portfolio/work/`, data, {
		withCredentials: true,
	})
}

function* addWork(action) {
	try {
		const result = yield call(addWorkAPI, action.data);
		yield put({
			type: WORK_ADD_SUCCESS,
			data: result.data,
		})
	} catch(e) {
		console.error(e);
		yield put({
			type: WORK_ADD_FAILURE,
			error: e,
		})
	}
}

function* watchAddWork() {
	yield takeLatest(WORK_ADD_REQUEST, addWork);
}

export default function* portfolioSaga(){
	yield all([
		fork(watchLoadPort),
		fork(watchEditPortfolio),
		fork(watchAddAbility),
		fork(watchRemoveAbility),
		fork(watchEditAbility),
		fork(watchEditAbilityOnlyAttr),
		fork(watchEditAbilityOnlyTitle),
		fork(watchEditWork),
		fork(watchDeleteWork),
		fork(watchAddWork),
		// call과 fork의 차이
		// call은 ()내의 함수 종료까지 기다림 -> 동기호출
		// fork도 ()내의 함수 종료가 아니여도 다른 부분 수행 -> 비동기호출
	])
}
