import * as types from './actionTypes';

export function loadCurrentGameDataSuccess(currentMatch) {
  return {type: types.LOAD_CURRENT_GAME_DATA_SUCCESS, currentMatch};
}

export function loadCurrentGameDataFailure() {
  return {type: types.LOAD_CURRENT_GAME_DATA_FAILURE};
}

export function loadCurrentGame(name) {
  return {type: types.LOAD_CURRENT_GAME, name};
}
