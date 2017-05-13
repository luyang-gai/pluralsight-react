import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import summoner from './summonerReducer';
import currentMatch from './currentMatchReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  summoner,
  currentMatch,
  ajaxCallsInProgress
});

export default rootReducer;
