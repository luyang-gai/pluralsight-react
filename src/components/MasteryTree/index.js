import React from 'react';
import PropTypes from 'prop-types';

import MasteryIconDisplay from '../MasteryIconDisplay/index';
import MasteryLine from '../MasteryLine/index';
import Wrapper from './Wrapper';

//masteriesList: array of masteries for the given masteryTree
//schema: structure of how many MasteryLines and how many MasteryIcons in each
const MasteryTree = ({masteryHash, masteriesList, schema, selectedMasteries}) => {
  // const get

  const getMasteryLine = (iter, count) => {
    let masteryIconArray = [];
    for (let i = 0; i < count; i++) {
      let masteryKey = iter.next().value;
      let mastery = masteryHash[masteryKey];
      masteryIconArray.push(
        <MasteryIconDisplay
          coordinates={mastery.coordinates}
          numberSelected={0}
          numberAvailable={5}/>
      );
    }
    return <MasteryLine masteryIconArray={masteryIconArray}/>;
  };

  const buildDisplay = () => {
    let masteryLineArray = [];
    let masterKeysIterator = masteriesList[Symbol.iterator]();

    schema.forEach(scheme => {
      masteryLineArray.push(getMasteryLine(masterKeysIterator, scheme));
    });

    return <div>{masteryLineArray}</div>;
  };

  return (
    <Wrapper>
      {
        buildDisplay()
      }
    </Wrapper>
  );
};

MasteryTree.propTypes = {
  masteryHash: PropTypes.object.isRequired,
  masteriesList: PropTypes.array.isRequired,
  schema: PropTypes.array.isRequired,
  selectedMasteries: PropTypes.array.isRequired
};

export default MasteryTree;
