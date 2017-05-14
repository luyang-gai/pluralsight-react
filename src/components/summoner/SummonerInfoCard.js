import React, {PropTypes} from 'react';
import ImageApi from '../../api/ImageApi';
import RankIcon from '../RankIcon';

let imageStyles = {
  height: "100px"
};

const numeralMap = {
  'I': '1',
  'II': '2',
  'III': '3',
  'IV': '4',
  'V': '5'
};

class SummonerInfoCard extends React.Component  {
  constructor(props, context) {
    super(props, context);

    this.getChampionWinPercent = this.getChampionWinPercent.bind(this);
  }

  getChampionWinPercent() {
    let currentChampionStats = this.props.participant.currentChampionStats;
    return Math.round(currentChampionStats.totalSessionsWon*100/currentChampionStats.totalSessionsPlayed);
  }

  getLeague(summoner) {
    let leagues = summoner.leagues['RANKED_SOLO_5x5'];
    if (leagues) {
      let numeralTier = leagues['rank'];
      return numeralMap[numeralTier];
    }
    return '';
  }

  getTier(summoner) {
    return summoner.leagues['RANKED_SOLO_5x5'] ? summoner.leagues['RANKED_SOLO_5x5']['tier'].toLowerCase() : '';
  }

  render() {
    let summoner = this.props.participant;
    return (
      <div>
        <img src={ImageApi.getImageByChampionId(summoner.championId)}/>
        <div>{summoner.summonerName}</div>
        <div>{summoner.rankedStats.summonerId}</div>
        <div>{this.getChampionWinPercent()}%</div>
        <div>{summoner.currentChampionStats.totalSessionsPlayed} games</div>
        <RankIcon styles={imageStyles} tier={this.getTier(summoner)} rank={this.getLeague(summoner)}/>
      </div>
    );
  }


}

//summoner.rankedStats.totalSessionsList / totalSessionsPlayed totalSessionsWon

SummonerInfoCard.propTypes = {
  participant: PropTypes.object.isRequired
};


export default SummonerInfoCard;
