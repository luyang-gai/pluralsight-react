const Client = require('node-rest-client').Client;
const client = new Client();
const host = 'http://localhost:49160';
import currentGame from '../data/current-game';
import * as apis from './CommonsApi';

const RIOT_HOST = 'https://na.api.riotgames.com';
const API_KEYS = [
  '97cb5a96-660c-40f6-aee5-59c80b50beaf', //smokensleep
  '593a8b66-8b3f-4900-99ca-f3c3a7b37229', //BIGLUIE
  '1a417329-8a55-43cb-9262-928bff0ccec9', //tbroner
  'RGAPI-d69ec951-e1a4-4d1c-aab0-78378cd3e745', //mybigfatashe
  'RGAPI-c2943d92-072d-449c-a426-8b56dc524a32', //bbotts
  '8ffb0850-f422-4a36-acf2-b6905253c81e' //bbottles
];
let count = 0;

class SummonerApi {
  //GET /summoner/:name
  static getSummonerByName(summonerName) {
    return apis.GET(`${host}/summoner/${summonerName}`);
  }
  //GET /summoner/:id/matchHistory
  static getMatchHistoryBySummonerId(summonerId) {
    return apis.GET(`${host}/summoner/${summonerId}/matchHistory`);
  }

  //GET /match/:matchId
  static getMatchByMatchId(matchId) {
    return apis.GET(`${host}/match/${matchId}`);
  }

  //GET /summoner/:summonerId/rankedStats
  static getSummonerStatsBySummonerId(summonerId) {
    return apis.GET(`${host}/summoner/${summonerId}/rankedStats`);
  }

  //GET /summoner/:summonerId/leagues
  static getRankedLeagueBySummonerId(summonerId) {
    return apis.GET(`${host}/summoner/${summonerId}/leagues`);
  }

  //GET /sumomoner/:summonerName/active-game
  static getCurrentGameBySummonerName(summonerName) {
    return apis.GET(`${host}/summoner/${summonerName}/active-game`);
  }

  static getMatchHistoryBySummonerName(name) {
    return this.getSummonerByName(name)
      .then((response) => {
        let summonerId = response.id;
        return this.getMatchHistoryBySummonerId(summonerId);
      })
      .then((response) => {
        return response;
      })
      .catch(err => console.error(err));
  }

  static mockGetCurrentGame() {
    return new Promise((resolve, reject) => {
      resolve(currentGame);
    });
  }

  static getMatchesBySummonerName(name, number) {
    let promiseList = [];
    let matches = [];
    return this.getMatchHistoryBySummonerName(name)
      .then(response => {
        let matches = response.matches;
        for (let i = 0; i < number; i++) {
          promiseList[i] = this.getMatchByMatchId(matches[i]).then(function(match) {
            return match;
          });
        }
        Promise.all(promiseList).then(matches => {
          return matches;
        });
      });
  }

  static getApiKey() {
    return API_KEYS[count % API_KEYS.length];
  }
}

export default SummonerApi;

