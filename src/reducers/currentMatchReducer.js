import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function currentMatchReducer(state = initialState.currentMatch, action) {
  switch(action.type) {
    case types.LOAD_CURRENT_GAME_DATA_SUCCESS: {
      let currentMatch = action.data;
      for (let i = 0; i < currentMatch.participants.length; i++) {
        setCurrentChampionRankedStats(currentMatch.participants[i]);
      }
      return currentMatch;
    }
    default:
      return state;
  }
}

function setCurrentChampionRankedStats(summoner) {
  let championId = summoner.championId;
  let championsList = summoner.rankedStats.champions;

  for (let i = 0; i < championsList.length; i++) {
    if (championsList[i].id === championId) {
      summoner['currentChampionStats'] = championsList[i].stats;
    }
  }
}
