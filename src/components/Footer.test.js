import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Header';

describe('Footer Component', () => {
  it('renders footer', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot;
  });
});
