import * as types from './actionTypes';
import MockSummonerApi from '../api/MockSummonerApi';

import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadSummonerSuccess(summoner) {
  return { type: types.LOAD_SUMMONER_SUCCESS, summoner};
}

export function loadCurrentGameDataSuccess(data) {
  return {type: types.LOAD_CURRENT_GAME_DATA_SUCCESS, data};
}

export function getSummonerByName(name) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return MockSummonerApi.mockGetRankedStatsData(name).then(summoner => {
      dispatch(loadSummonerSuccess(summoner));
    }).catch(error => {
      throw(error);
    });
  };
}

export function mockGetRankedStats(name) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return MockSummonerApi.mockGetRankedStatsData(name).then(summoner => {
      dispatch(loadSummonerSuccess(summoner));
    }).catch(error => {
      throw(error);
    });
  };
}

export function mockGetCurrentGame(name) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return MockSummonerApi.mockGetCurrentGame(name).then(currentGameData => {
      dispatch(loadCurrentGameDataSuccess(currentGameData));
    }).catch(error => {
      throw(error);
    });
  };
}
