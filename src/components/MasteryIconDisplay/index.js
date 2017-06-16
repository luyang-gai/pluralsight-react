import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import MasteryIcon from '../MasteryIcon/index';

let styles = {
  textAlign: 'center'
};

const MasteryIconDisplay = (props) => {
  return (
    <Wrapper>
      <MasteryIcon coordinates={props.coordinates}/>
      <div style={styles}>{props.numberSelected}/{props.numberAvailable}</div>
    </Wrapper>
  );
};

MasteryIconDisplay.propTypes = {
  coordinates: PropTypes.object.isRequired,
  numberSelected: PropTypes.number.isRequired,
  numberAvailable: PropTypes.number.isRequired
};

export default MasteryIconDisplay;
