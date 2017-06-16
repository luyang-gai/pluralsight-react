import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import H4 from '../H4/index';
import ColoredText from '../ColoredText/index';

const ChampionStats = ({currentChampionStats}) => {
  const championWinPercent = Math.round(currentChampionStats.totalSessionsWon*100/currentChampionStats.totalSessionsPlayed);
  const averageKills = currentChampionStats.totalChampionKills / currentChampionStats.totalSessionsPlayed;
  const averageDeaths = currentChampionStats.totalDeathsPerSession / currentChampionStats.totalSessionsPlayed;
  const averageAssists = currentChampionStats.totalAssists / currentChampionStats.totalSessionsPlayed;
  const KDA = (averageKills + averageAssists) / averageDeaths;

  const getWinPercentColor = (percent) => {
    if (percent > 50) {
      return 'green';
    } else if (percent === 50) {
      return 'blue';
    } else {
      return 'red';
    }
  };

  const getKDAColor = (KDA) => {
    if (KDA > 4.5) {
      return 'green';
    } else if (KDA > 3) {
      return 'blue';
    } else {
      return 'red';
    }
  };

  return (
    <Wrapper>
      <H4>Champion stats</H4>
      <div>
        Winrate: <ColoredText color={getWinPercentColor(championWinPercent)}>{championWinPercent}%</ColoredText>
      </div>
      <div>Games played: {currentChampionStats.totalSessionsPlayed} games</div>
      <div>Record: {currentChampionStats.totalSessionsWon}W {currentChampionStats.totalSessionsLost}L</div>
      <div>KDA: <ColoredText color={getKDAColor(KDA)}>{KDA.toFixed(2)}</ColoredText></div>
      <div>{averageKills.toFixed(1)} K {averageDeaths.toFixed(1)} D {averageAssists.toFixed(1)} A</div>
    </Wrapper>
  );
};

/*
  EX:
  currentChampionStats: {

  }
 */
ChampionStats.propTypes = {
  currentChampionStats: PropTypes.object.isRequired
};

export default ChampionStats;
