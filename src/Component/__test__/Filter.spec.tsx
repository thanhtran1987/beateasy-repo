import * as React from 'react';
import { shallow, mount } from 'enzyme';

import TestComponent from '../Filter';

describe('Filter', () => {
  it('should render correctly in default state', () => {
    const component = shallow(<TestComponent />);
    expect(component).toMatchSnapshot();
  });
  it('should dispatch correctly onclick for filter buttons', () => {
    const mockProps = {
      history: { push: jest.fn(), goBack: jest.fn() },
      setFilter: jest.fn(),
    };
    const component = mount(<TestComponent setFilter={mockProps.setFilter} filter={0} />);
    const target = component.find('button');
    target.at(0).simulate('click');
    target.at(1).simulate('click');
    target.at(2).simulate('click');
    target.at(3).simulate('click');
    expect(mockProps.setFilter).toHaveBeenCalledTimes(4);
  });
});
