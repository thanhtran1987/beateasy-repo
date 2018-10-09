import * as React from 'react';
import { shallow } from 'enzyme';

import TestComponent from '../Tile';

import { raceItem } from '../../Helper/fixture';

describe('Tile', () => {
  it('should render correctly in default state', () => {
    const component = shallow(<TestComponent {...raceItem} />);
    expect(component).toMatchSnapshot();
  });
});
