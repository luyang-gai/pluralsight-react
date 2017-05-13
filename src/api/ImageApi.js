import * as apis from './CommonsApi';
import champions from '../data/champions';

const championsHash = champions.data;

class ImageApi {
  static getImageURLByChampionName(name) {
    return `http://ddragon.leagueoflegends.com/cdn/7.9.1/img/champion/${name}.png`;
  }

  static getImageByChampionId(id) {
    return this.getImageURLByChampionName(this.getChampionName(id));
  }

  static getChampionName(id) {
    for (let key in championsHash) {
      if (championsHash.hasOwnProperty(key)) {
        let champion = championsHash[key];
        if (champion.id === id) {
          //TODO: find better way of doing this
          if (champion.name === 'Vel\'Koz') {
            return 'Velkoz';
          }
          return champion.name.replace(/\.\s|'/, '', '');
        }
      }
    }
    console.log(`Could not find champion for id: ${id}`);
    return "COULD NOT FIND CHAMPION WITH THAT NAME";
  }
}

export default ImageApi;
