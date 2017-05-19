import React, {PropTypes} from 'react';
import Wrapper from './Wrapper';
import SummonerSpellIcon from '../SummonerSpellIcon/index';

const SummonerSpellsDisplay = (props) => {
  return (
    <Wrapper>
      <SummonerSpellIcon spellId={props.spell1Id}/>
      <SummonerSpellIcon spellId={props.spell2Id}/>
    </Wrapper>
  );
};

SummonerSpellsDisplay.propTypes = {
  spell1Id: PropTypes.number.isRequired,
  spell2Id: PropTypes.number.isRequired
};

export default SummonerSpellsDisplay;
