import React, {PropTypes} from 'react';
import * as styles from './common/Styles';

const imageStyles = {
  height: "100%"
};

const containerStyles = {
  alignItems: "center",
  textAlign: "center",
  border: `2px solid ${styles.PRIMARY_COLOR}`,
  width: "200px",
  height: "120px",
  borderRadius: "4px",
  display: "flex"
};

const RankIcon = ({rank, tier, wins, losses, winRate}) => {
  return (
    <div style={containerStyles}>
      <img style={imageStyles} src={`https://opgg-static.akamaized.net/images/medals/${tier}_${rank}.png`}/>
      <div className="tier-rank-info">
        <div className="tier-rank">{tier} {rank}</div>
        <div className="">{wins} W {losses} L</div>
        <div className="win-rate">Win ratio {winRate}%</div>
      </div>
    </div>
  );
};

RankIcon.propTypes = {
  rank: PropTypes.string.isRequired,
  tier: PropTypes.string.isRequired
};

export default RankIcon;
