import React from 'react';
import ChampionImage from '../index';
import renderer from 'react-test-renderer';

it('renders a basic ChampionImage correctly', () => {
  const tree = renderer.create(
    <ChampionImage championId={62}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
