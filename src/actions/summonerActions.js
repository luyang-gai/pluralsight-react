import * as types from './actionTypes';
import SummonerApi from '../api/SummonerApi';

import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadSummonerSuccess(summoner) {
  return { type: types.LOAD_SUMMONER_SUCCESS, summoner};
}

export function getSummonerByName(name) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return SummonerApi.mockGetRankedStatsData(name).then(summoner => {
      dispatch(loadSummonerSuccess(summoner));
    }).catch(error => {
      throw(error);
    });
  };
}

export function mockGetRankedStats(name) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return SummonerApi.mockGetRankedStatsData(name).then(summoner => {
      dispatch(loadSummonerSuccess(summoner));
    }).catch(error => {
      throw(error);
    });
  };
}
