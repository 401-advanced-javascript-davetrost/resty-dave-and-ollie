import React from 'react';
import { shallow } from 'enzyme';
import { HistoryItem } from './HistoryItem';

describe('HistoryItem component', () => {
  it('renders a history item', () => {
    const wrapper = shallow(<HistoryItem 
      _id="abc123"
      url="heyarnold.com/api/characters"
      method="get"
      handleHistorySelect={() => true}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a history item with the body included', () => {
    const wrapper = shallow(<HistoryItem 
      _id="xyzabc"
      url="random-api.com/api/characters"
      method="post"
      body={`{
        name: 'Garfield',
        color: 'Orange with black stripes'
      }
      `}
      handleHistorySelect={() => true}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
