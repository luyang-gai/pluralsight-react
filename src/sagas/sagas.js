import {takeEvery, put, call, all} from 'redux-saga/effects';

import MockSummonerApi from '../api/MockSummonerApi';
import * as types from '../actions/actionTypes';

import {loadCurrentGameDataSuccess} from '../actions/currentMatchActions';

export default function* rootSaga() {
  yield all([
    watchLoadCurrentGame()
  ])
}

export function *watchLoadCurrentGame() {
  yield takeEvery(types.LOAD_CURRENT_GAME, loadEveryGame);
}

export function *loadEveryGame(name) {
  let currentMatch = yield call(MockSummonerApi.mockGetCurrentGame, name);
  yield put(loadCurrentGameDataSuccess(currentMatch));
}
