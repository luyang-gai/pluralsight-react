import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';

const MasteryIcon = (props) => {
  return (
    <Wrapper coordinates={props.coordinates}/>
  );
};

MasteryIcon.propTypes = {
  coordinates: PropTypes.object.isRequired
};

export default MasteryIcon;
