import {combineReducers} from 'redux';
import summoner from './summonerReducer';
import currentMatch from './currentMatchReducer';
import loading from './loadingReducer';

const rootReducer = combineReducers({
  summoner,
  currentMatch,
  loading
});

export default rootReducer;
