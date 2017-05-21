const Client = require('node-rest-client').Client;
const client = new Client();
const host = 'http://localhost:3000';
import { matchdata } from '../data/matchdata';
import currentGame from '../data/current-game';
import * as apis from './CommonsApi';

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
      resolve(currentGame);
    });
  }
}

export default MockSummonerApi;

