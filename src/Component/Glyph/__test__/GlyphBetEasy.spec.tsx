import * as React from 'react';
import { shallow } from 'enzyme';

import TestComponent from '../GlyphBetEasy';

describe('Tile', () => {
  it('should render correctly in default state', () => {
    const component = shallow(<TestComponent />);
    expect(component).toMatchSnapshot();
  });
});
