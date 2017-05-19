import React from 'react';
import Wrapper from './Wrapper';
import {data} from '../../data/runes';

import H4 from '../../components/H4/index';

const RunesDisplay = (props) => {
  let runeDescriptionArray = [];
  let runeMap = {};

  const getRuneName = (runeId) => {
    return data[runeId].description;
  };

  const splitStringByOneSpace = str => {
    let spaceIndex = str.indexOf(' ');
    return [str.substring(0, spaceIndex), str.substring(spaceIndex+1)];
  };

  const populateRuneMap = () => {
    props.runes.map(rune => {
      let runeName = getRuneName(rune.runeId);
      let runeNameNoSymbol = runeName.substring(1, runeName.length);
      let runeArray = splitStringByOneSpace(runeNameNoSymbol);

      //remove % for math
      let runeValue = runeArray[0].replace('%', '');
      let runeDescription = runeArray[1];

      runeValue = (rune.count * runeValue).toFixed(1);
      addEntryToRuneMap(runeDescription.split('(')[0], runeValue);
    });
  };

  const addEntryToRuneMap = (runeKey, runeValue) => {
    if (runeMap[runeKey]) {
      runeMap[runeKey] = Number(runeMap[runeKey]) + Number(runeValue);
    } else {
      runeMap[runeKey] = runeValue;
    }
  };

  const displayPercent = (runeKey) => {
    return (runeKey === 'attack speed' || runeKey.includes('cooldown')) ? '%' : '';
  };

  const displayPlusMinus = (runeKey) => {
    return runeKey.includes('cooldown') ? '-' : '+';
  };

  populateRuneMap();

  return (
    <Wrapper>
      <H4>Runes</H4>
      {
        Object.keys(runeMap).map((runeKey) =>
          <div>{displayPlusMinus(runeKey)}{runeMap[runeKey]}{displayPercent(runeKey)} {runeKey}</div>
        )
      }
    </Wrapper>
  );
};

export default RunesDisplay;

