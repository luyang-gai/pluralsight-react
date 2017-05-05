const Client = require('node-rest-client').Client;
const client = new Client();
const host = 'http://localhost:3000';
const matchData = require('./matchdata');

class SummonerApi {
  static getSummonerByName(name) {
    return this.GET(`${host}/summoner/${name}`);
  }

  static getMatchHistoryBySummonerId(summonerId) {
    return this.GET(`${host}/summoner/${summonerId}/matchHistory`);
  }

  static getMatchByMatchId(matchId) {
    return this.GET(`${host}/match/${matchId}`);
  }

  static getMatchHistoryBySummonerName(name) {
    return this.getSummonerByName(name)
      .then((response) => {
        console.log(`response: ${JSON.stringify(response)}`);
        console.log(`summonerId: ${response.summonerId}`);
        let summonerId = response.id;
        debugger;
        return this.getMatchHistoryBySummonerId(summonerId);
      })
      .then((response) => {
        debugger;
        return response;
      })
      .catch(err => console.error(err));
  }

  static mockGetMatchHistoryBySummonerName(name) {
    let promiseList = [];

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let matches = matchData.default.matches;

        for (let i = 0; i < matches.length; i++) {
          promiseList.push(
            this.getMatchByMatchId(matches[i].matchId).then(match => {
              return match;
            })
          );
        }
        Promise.all(promiseList).then(matches => {
          debugger;
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

  static GET(url) {
    return new Promise((resolve, reject) => {
      client.get(url, (data, response) => {
        resolve(data);
      })
      .on('error', err => reject(err));
    });
  }
}

export default SummonerApi;

