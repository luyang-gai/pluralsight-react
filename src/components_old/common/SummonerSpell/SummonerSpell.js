import React from 'react';
import {summonerSpells} from '../../../data/summonerspells';

const SummonerSpell = ({spellId}) => {
  const getUrl = (id) => {
    let spellObject = summonerSpells[id];
    return `http://ddragon.leagueoflegends.com/cdn/7.9.2/img/spell/${spellObject.key}.png`
  };

  return (
    <img src={getUrl(spellId)}/>
  );
};

export default SummonerSpell;
