/**
 *
 * ChampionImage
 *
 * Component to render a champion image.
 * Input: championId
 * Output: <img> of champion
 */

import React, { PropTypes } from 'react';

import ImageApi from '../../api/ImageApi';
import Wrapper from './Wrapper';

const ChampionImage = (props) => {
  let championUrl = ImageApi.getImageByChampionId(props.championId);
  return (
    <Wrapper src={championUrl} {...props}/>
  );
};

ChampionImage.propTypes = {
  championId: PropTypes.number.isRequired
};

export default ChampionImage;
