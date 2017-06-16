import React from 'react';
import PropTypes from 'prop-types';

import masteries from '../../data/masteries';
import Wrapper from './Wrapper';
import MasteryTree from '../MasteryTree/index';

const MasteriesDisplay = (props) => {
  let newMasteries = masteries.data;
  const schema = [2, 3, 2, 3, 2, 3];
  let masteriesList = Object.keys(newMasteries);

  const masteriesList1 = masteriesList.splice(0, 15);
  const masteriesList2 = masteriesList.splice(0, 15);

  const addCoordinatesToMasteryHash = (masteries) => {
    let currentXCoordinate = 0;
    let currentYCoordinate = 0;

    for (let mastery in masteries) {
      if (currentXCoordinate === -480) {
        currentXCoordinate = 0;
        currentYCoordinate -= 48;
      }
      masteries[mastery]['coordinates'] = {
        x: currentXCoordinate,
        y: currentYCoordinate
      };

      currentXCoordinate -= 48;
    }
  };

  addCoordinatesToMasteryHash(newMasteries);

  return (
    <Wrapper>
      <MasteryTree selectedMasteries={props.masteries} masteryHash={newMasteries} masteriesList={masteriesList1} schema={schema}/>
      <MasteryTree selectedMasteries={props.masteries} masteryHash={newMasteries} masteriesList={masteriesList2} schema={schema}/>
      <MasteryTree selectedMasteries={props.masteries} masteryHash={newMasteries} masteriesList={masteriesList} schema={schema}/>
    </Wrapper>
  );
};

MasteriesDisplay.propTypes = {
  masteries: PropTypes.array.isRequired
};

export default MasteriesDisplay;
