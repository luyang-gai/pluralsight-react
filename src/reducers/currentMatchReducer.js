import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function currentMatchReducer(state = initialState.currentMatch, action) {
  switch(action.type) {
    case types.LOAD_CURRENT_GAME_DATA_SUCCESS: {
      let currentMatch = action.currentMatch;
      setCurrentChampionRankedStats(currentMatch);
      return currentMatch;
    }
    default:
      return state;
  }
}

function setCurrentChampionRankedStats(currentMatch) {
  for (let i = 0; i < currentMatch.participants.length; i++) {
    let summoner = currentMatch.participants[i];
    let championId = summoner.championId;
    let championsList = summoner.rankedStats.champions;

    for (let i = 0; i < championsList.length; i++) {
      if (championsList[i].id === championId) {
        summoner['currentChampionStats'] = championsList[i].stats;
      }
    }
  }
}
