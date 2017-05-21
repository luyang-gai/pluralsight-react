import {takeEvery, put, call, all} from 'redux-saga/effects';

import MockSummonerApi from '../api/MockSummonerApi';
import SummonerApi from '../api/SummonerApi';
import * as types from '../actions/actionTypes';

import {loadCurrentGameDataSuccess, loadCurrentGameDataFailure} from '../actions/currentMatchActions';
import {loadSuccess, loadStarted, loadFailure} from '../actions/loadingActions';

const isMock = true;

export default function* rootSaga() {
  yield all([
    watchLoadCurrentGame()
  ]);
}

export function *watchLoadCurrentGame() {
  yield takeEvery(types.LOAD_CURRENT_GAME, loadAllGameData);
}

export function *loadAllGameData(event) {
  yield put(loadStarted());
  // if (isMock)
  let currentMatch = isMock ? yield call(MockSummonerApi.mockGetCurrentGame, event.name) : yield call(SummonerApi.getCurrentGameBySummonerName, event.name);
  // let currentMatch = yield call(MockSummonerApi.mockGetCurrentGame, event.name);
  if (currentMatch.status && currentMatch.status.status_code > 299) {
    yield put(loadFailure());
  } else {
    yield getAdditionalSummonerData(currentMatch.participants);
    yield put(loadCurrentGameDataSuccess(currentMatch));
    yield put(loadSuccess());
  }
}

function getAdditionalSummonerData(participants) {
  let promiseList = [];
  participants.forEach(participant => {
    participant['leagues'] = {};
    promiseList.push(
      SummonerApi.getSummonerStatsBySummonerId(participant.summonerId).then(rankedStats => {
        participant['rankedStats'] = rankedStats;
      })
    );
    promiseList.push(
      SummonerApi.getRankedLeagueBySummonerId(participant.summonerId).then(leagues => {
        for (let i = 0; i < leagues.length; i++) {
          let queueType = leagues[i].queueType;
          participant['leagues'][queueType] = leagues[i];
        }
      })
    );
  });
  return Promise.all(promiseList);
}
