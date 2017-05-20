const Client = require('node-rest-client').Client;
const client = new Client();
const host = 'http://localhost:3000';
import { matchdata } from './matchdata';
import currentGame from './current-game';
import * as apis from './CommonsApi';
import SummonerApi from './SummonerApi';

class MockSummonerApi {
  static getMatchByMatchId(matchId) {
    return apis.GET(`${host}/match/${matchId}`);
  }

  static getCurrentGameBySummonerId(summonerId) {
    return apis.GET(`${host}/summoner/${summonerId}/active-game`);
  }

  static mockGetMatchHistoryBySummonerName(name) {
    let promiseList = [];

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let matches = matchdata.matches;

        for (let i = 0; i < matches.length; i++) {
          promiseList.push(
            this.getMatchByMatchId(matches[i].matchId).then(match => {
              return match;
            })
          );
        }
        Promise.all(promiseList).then(matches => {
          return matches;
        });
      }, 2000);
    });
  }

  static mockGetRankedStatsData() {
    return new Promise((resolve, reject) => {
      let mockMatchData = {
        'firstBaron': .56,
        'firstTower': .76,
        'firstDragon': .75,
        'firstInhibitor': .95,
        'firstBlood': .55,
        'infernal': .75,
        'mountain': .70,
        'cloud': .55,
        'ocean': .56
      };
      resolve(mockMatchData);
    });
  }

  static mockGetCurrentGame() {
    return new Promise((resolve, reject) => {
      let promiseList = [];
      for (let i = 0; i < currentGame.participants.length; i++) {
        let participant = currentGame.participants[i];
        participant['leagues'] = {};
        promiseList.push(
          SummonerApi.getSummonerStatsBySummonerId(participant.summonerId).then(rankedStats => {
            participant['rankedStats'] = rankedStats;
          })
        );
        promiseList.push(
          SummonerApi.getRankedLeagueBySummonerId(participant.summonerId).then(leagues => {
            for (let i = 0; i < leagues.length; i++) {
              let queueType = leagues[i].queueType;
              participant['leagues'][queueType] = leagues[i];
            }
          })
        );
      }
      Promise.all(promiseList).then(matches => {
        return resolve(currentGame);
      });
    });
  }
}

export default MockSummonerApi;

