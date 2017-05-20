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

    let wins = 0;
    let losses = 0;
    let played = 0;

    championsList.forEach((champion) => {
      wins += champion.stats.totalSessionsWon;
      losses += champion.stats.totalSessionsLost;
      played += champion.stats.totalSessionsPlayed;

      if (champion.id === championId) {
        summoner['currentChampionStats'] = champion.stats;
      }
    });

    summoner.rankedStats.totalWins = wins;
    summoner.rankedStats.totalLosses = losses;
    summoner.rankedStats.totalPlayed = played;
  }
}
