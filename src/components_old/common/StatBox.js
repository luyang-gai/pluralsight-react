import React, {PropTypes} from 'react';

const styles = {
  width: "20%",
  height: "20%",
  margin: "10px",
  border: "2px solid black"
};

const StatBox = ({stat, value}) => (
  <div style={styles}>
    <div>{stat}</div>
    <div>{value}</div>
  </div>
);

StatBox.propTypes = {
  stat: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default StatBox;

