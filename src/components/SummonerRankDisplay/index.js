import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import RankIcon from '../RankIcon/index';
import { numeralMap } from '../../data/numeral-map';

const SummonerRankDisplay = (props) => {

  const getLeague = (summoner) => {
    let leagues = summoner.leagues['RANKED_SOLO_5x5'];
    if (leagues) {
      let numeralTier = leagues['rank'];
      return numeralMap[numeralTier];
    }
    return '';
  };

  const getTier = (summoner) => {
    return summoner.leagues['RANKED_SOLO_5x5'] ? summoner.leagues['RANKED_SOLO_5x5']['tier'].toLowerCase() : '';
  };

  return (
    <Wrapper color={getTier(props.summoner)}>
      <RankIcon tier={getTier(props.summoner)} rank={getLeague(props.summoner)}/>
      <div className="tier-rank-info">
        <div className="tier-rank">{getTier(props.summoner)} {getLeague(props.summoner)}</div>
        <div className="">{props.summoner.rankedStats.totalWins} W {props.summoner.rankedStats.totalLosses} L</div>
        <div className="win-rate">Win ratio {(100*props.summoner.rankedStats.totalWins/props.summoner.rankedStats.totalPlayed).toFixed(0)}%</div>
      </div>
    </Wrapper>
  );
};

SummonerRankDisplay.propTypes = {
  summoner: PropTypes.object.isRequired
};

export default SummonerRankDisplay;
