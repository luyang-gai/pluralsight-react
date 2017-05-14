import React, {PropTypes} from 'react';
import * as styles from './common/Styles';

const imageStyles = {
  width: "100%"
};

const containerStyles = {
  alignItems: "center",
  textAlign: "center",
  border: `2px solid ${styles.PRIMARY_COLOR}`,
  width: "100px",
  height: "120px",
  borderRadius: "4px"
};

const RankIcon = ({rank, tier}) => {
  return (
    <div style={containerStyles}>
      <img style={imageStyles} src={`https://opgg-static.akamaized.net/images/medals/${tier}_${rank}.png`}/>
      <div>{tier} {rank}</div>
    </div>
  );
};

RankIcon.propTypes = {
  rank: PropTypes.string.isRequired,
  tier: PropTypes.string.isRequired
};

export default RankIcon;
