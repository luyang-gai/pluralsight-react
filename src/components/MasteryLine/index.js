import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';

const MasteryLine = (props) => {
  return (
    <Wrapper>{props.masteryIconArray}</Wrapper>
  );
};

MasteryLine.propTypes = {
  masteryIconArray: PropTypes.array.isRequired
};

export default MasteryLine;
