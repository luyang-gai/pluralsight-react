/**
 *
 * ChampionImage
 *
 * Component to render a champion image.
 * Input: championId
 * Output: <img> of champion
 */

import React  from 'react';
import PropTypes from 'prop-types';

import ImageHelpers from './ImageHelpers';
import Wrapper from './Wrapper';

const ChampionImage = (props) => {
  return (
    <Wrapper src={ImageHelpers.getImageByChampionId(props.championId)} {...props}/>
  );
};

ChampionImage.propTypes = {
  championId: PropTypes.number.isRequired
};

export default ChampionImage;
