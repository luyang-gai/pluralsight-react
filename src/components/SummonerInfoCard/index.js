import React, {PropTypes} from 'react';

import SummonerRankDisplay from '../SummonerRankDisplay/index';
import ChampionImage from '../ChampionImage/index';
import SummonerSpellsDisplay from '../SummonerSpellsDisplay/index';
import ChampionStats from '../ChampionStats/index';
import Wrapper from './Wrapper';
import RunesDisplay from '../RunesDisplay/index';
import H3 from '../H3/index';


let summonerCardHeaderStyles = {
  display: "flex"
};

const SummonerInfoCard = (props) => {
  let summoner = props.participant;

  return (
    <Wrapper>
      <div className="summoner-card-header" style={summonerCardHeaderStyles}>
        <ChampionImage championId={summoner.championId}/>
        <SummonerRankDisplay summoner={summoner}/>
      </div>
      <H3>{summoner.summonerName}</H3>
      {
        summoner.currentChampionStats &&
        <ChampionStats currentChampionStats={summoner.currentChampionStats}/>
      }
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
