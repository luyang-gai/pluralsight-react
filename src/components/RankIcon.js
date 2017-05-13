import React, {PropTypes} from 'react';

const RankIcon = ({rank, tier}) => {
  return (
    <img src={`https://opgg-static.akamaized.net/images/medals/${tier}_${rank}.png`}/>
  );
};

RankIcon.propTypes = {
  rank: PropTypes.string.isRequired,
  tier: PropTypes.string.isRequired
};

export default RankIcon;
