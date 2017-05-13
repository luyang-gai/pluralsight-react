import * as types from './actionTypes';
import SummonerApi from '../api/SummonerApi';
import MockSummonerApi from '../api/MockSummonerApi';

import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadCurrentGameDataSuccess(currentMatch) {
  return {type: types.LOAD_CURRENT_GAME_DATA_SUCCESS, currentMatch};
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
