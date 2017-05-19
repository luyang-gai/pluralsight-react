import React, {PropTypes} from 'react';
import {summonerSpells} from './summoner-spell-map';
import Wrapper from './Wrapper';

const SummonerSpell = (props) => {
  const getUrl = (id) => {
    let spellObject = summonerSpells[id];
    return `http://ddragon.leagueoflegends.com/cdn/7.9.2/img/spell/${spellObject.key}.png`;
  };

  return (
    <Wrapper>
      <img src={getUrl(props.spellId)}/>
    </Wrapper>
  );
};

SummonerSpell.propTypes = {
  spellId: PropTypes.string.isRequired
};

export default SummonerSpell;
