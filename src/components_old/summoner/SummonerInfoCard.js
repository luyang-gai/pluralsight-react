import React, {PropTypes} from 'react';
import ImageApi from '../../api/ImageApi';
import RankIcon from '../RankIcon';
import SummonerSpell from '../common/SummonerSpell/SummonerSpell';
import { numeralMap } from '../../data/numeral-map';

let imageStyles = {
  display: "block",
  margin: "auto"
};

let summonerSpellStyles = {
  display: "flex",
  justifyContent: "center"
};

let summonerCardHeaderStyles = {
  display: "flex"
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
        <div className='summoner-card-header' style={summonerCardHeaderStyles}>
          <img style={imageStyles} src={ImageApi.getImageByChampionId(summoner.championId)}/>
          <RankIcon
            styles={imageStyles}
            tier={this.getTier(summoner)}
            rank={this.getLeague(summoner)}
            wins={summoner.currentChampionStats.totalSessionsWon}
            losses={summoner.currentChampionStats.totalSessionsLost}
            winRate={this.getChampionWinPercent()}
          />
        </div>
        <div>{summoner.summonerName}</div>
        <div>{summoner.rankedStats.summonerId}</div>
        <div>{this.getChampionWinPercent()}%</div>
        <div>{summoner.currentChampionStats.totalSessionsPlayed} games</div>
        <div className="summonerSpells" style={summonerSpellStyles}>
          <SummonerSpell spellId={summoner.spell1Id}/>
          <SummonerSpell spellId={summoner.spell2Id}/>
        </div>
      </div>
    );
  }
}

SummonerInfoCard.propTypes = {
  participant: PropTypes.object.isRequired
};


export default SummonerInfoCard;
