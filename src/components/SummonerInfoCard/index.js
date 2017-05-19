import React, {PropTypes} from 'react';

import SummonerRankDisplay from '../SummonerRankDisplay/index';
import ChampionImage from '../ChampionImage/index';
import SummonerSpellsDisplay from '../SummonerSpellsDisplay/index';
import Wrapper from './Wrapper';
import RunesDisplay from '../RunesDisplay/index';
import H3 from '../H3/index';
import H4 from '../H4/index';


let summonerCardHeaderStyles = {
  display: "flex"
};

const SummonerInfoCard = (props) => {
  let summoner = props.participant;

  const getChampionWinPercent = () => {
    let currentChampionStats = props.participant.currentChampionStats;
    return Math.round(currentChampionStats.totalSessionsWon*100/currentChampionStats.totalSessionsPlayed);
  };

  const getKDAString = (stats) => {
    let sessions = stats.totalSessionsPlayed;
    let averageKills = (stats.totalChampionKills / sessions);
    let averageDeaths = (stats.totalDeathsPerSession / sessions);
    let averageAssists = (stats.totalAssists / sessions);

    let KDA = (averageKills + averageAssists) / averageDeaths;

    return ` KDA: ${KDA.toFixed(1)} ${averageKills.toFixed(1)} K / ${averageDeaths.toFixed(1)} D / ${averageAssists.toFixed(1)} A`;
  };

  return (
    <Wrapper>
      <div className="summoner-card-header" style={summonerCardHeaderStyles}>
        <ChampionImage championId={summoner.championId}/>
        <SummonerRankDisplay summoner={summoner}/>
      </div>
      <H3>{summoner.summonerName}</H3>
      <H4>Champion stats</H4>
      <div>Win rate: {getChampionWinPercent()}%</div>
      <div>Games played: {summoner.currentChampionStats.totalSessionsPlayed} games</div>
      <div>Record: {summoner.currentChampionStats.totalSessionsWon}W {summoner.currentChampionStats.totalSessionsLost}L</div>
      <div>{getKDAString(summoner.currentChampionStats)}</div>
      <RunesDisplay runes={summoner.runes}/>
      <SummonerSpellsDisplay
        spell1Id={summoner.spell1Id}
        spell2Id={summoner.spell2Id} />
    </Wrapper>
  );
};

SummonerInfoCard.propTypes = {
  participant: PropTypes.object.isRequired
};


export default SummonerInfoCard;
