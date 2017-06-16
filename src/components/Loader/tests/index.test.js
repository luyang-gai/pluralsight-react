import React from 'react';
import { mount } from 'enzyme';

import Loader from '../index';

const renderComponent = (props = {}) => mount(
  <Loader {...props}>
    <span>Hello</span>
  </Loader>
);

describe('<Loader />', () => {
  it('should render div with children when loaded is true', () => {
    const renderedComponent = renderComponent({
      loaded: true
    });
    expect(renderedComponent.find('div').length).toEqual(1);
  });

  it('should render spinner with children when loaded is false', () => {
    const renderedComponent = renderComponent({
      loaded: false
    });
    expect(renderedComponent.find('Spinner').length).toEqual(1);
  });
});
