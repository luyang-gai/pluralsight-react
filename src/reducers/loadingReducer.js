import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function loadingReducer(state = initialState.loading, action) {
  switch (action.type) {
    case types.LOAD_SUCCESS: {
      return false;
    }
    case types.LOAD_FAILURE: {
      return false;
    }
    case types.LOAD_STARTED: {
      return true;
    }
    default:
      return state;
  }
}
