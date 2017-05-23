import React from 'react';
import { mount } from 'enzyme';

import Button from '../index';
const handleRoute = () => {};
const renderComponent = (props = {}) => mount(
  <Button {...props}>
    Hello
  </Button>
);

describe('<Button />', () => {
  it('should render an A when handleRoute is falsey', () => {
    const renderedComponent = renderComponent({});
    expect(renderedComponent.find('a').length).toEqual(1);
  });

  it('should render a button when handleRoute is truthy', () => {
    const renderedComponent = renderComponent({ handleRoute });
    expect(renderedComponent.find('button').length).toEqual(1);
  });

  it('should handle click events', () => {
    const onClickSpy = jest.fn();
    const renderedComponent = renderComponent({ onClick: onClickSpy });
    renderedComponent.find('a').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });
});
