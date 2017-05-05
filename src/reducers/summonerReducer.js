import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function summonerReducer(state = initialState.summoner, action) {
  switch(action.type) {
    case types.LOAD_SUMMONER_SUCCESS:
      debugger;
      // let JSON = JSON.parse(action.summoner);
      // return JSON;
      return action.summoner;
    default:
      return state;
  }
}
