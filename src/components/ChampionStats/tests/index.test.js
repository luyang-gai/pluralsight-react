import React from 'react';
import ChampionStats from '../index';
import renderer from 'react-test-renderer';
import mockChampionStats from '../../../mock/CurrentChampionStats';

describe('<ChampionStats/>', () => {
  it('renders basic ChampionStats correctly', () => {
    const tree = renderer.create(
      <ChampionStats currentChampionStats={mockChampionStats}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
