import * as types from './actionTypes';

export function loadSuccess(currentMatch) {
  return {type: types.LOAD_SUCCESS, currentMatch};
}

export function loadStarted() {
  return {type: types.LOAD_STARTED};
}

export function loadFailure(name) {
  return {type: types.LOAD_FAILURE, name};
}
