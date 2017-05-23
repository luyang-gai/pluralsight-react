import React from 'react';
import RankIcon from '../index';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <RankIcon tier="silver" rank="5"/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
