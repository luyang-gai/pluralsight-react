import React from 'react';
import { mount } from 'enzyme';

import ColoredText from '../index';

const renderComponent = (props = {}) => mount(
  <ColoredText {...props}>
    Hello
  </ColoredText>
);

describe('<ColoredText />', () => {
  it('should render a <span> tag', () => {
    const renderedComponent = renderComponent({});
    expect(renderedComponent.find('span').length).toEqual(1);
  });
});
