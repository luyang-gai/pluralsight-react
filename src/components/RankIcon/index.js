import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';

const RankIcon = (props) => {
  return (
    <Wrapper src={`https://opgg-static.akamaized.net/images/medals/${props.tier}_${props.rank}.png`}/>
  );
};

RankIcon.propTypes = {
  rank: PropTypes.string.isRequired,
  tier: PropTypes.string.isRequired
};

export default RankIcon;
