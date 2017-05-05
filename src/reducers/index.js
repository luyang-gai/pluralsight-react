import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import summoner from './summonerReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  summoner,
  ajaxCallsInProgress
});

export default rootReducer;
