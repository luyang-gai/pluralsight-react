import {combineReducers} from 'redux';
import summoner from './summonerReducer';
import currentMatch from './currentMatchReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  summoner,
  currentMatch,
  ajaxCallsInProgress
});

export default rootReducer;
