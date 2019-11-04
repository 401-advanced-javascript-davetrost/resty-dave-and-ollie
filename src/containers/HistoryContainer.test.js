import React from 'react';
import { shallow } from 'enzyme';
import HistoryContainer from './HistoryContainer';

describe('History Container component', () => {
  it('renders the container', () => {
    const sampleHistoryItem = {
      _id: 'xyzabc',
      url: 'random-api.com/api/characters',
      method: 'post',
      body: `{
        name: 'Garfield',
        color: 'Orange with black stripes'
      }`
    };
    const wrapper = shallow(<HistoryContainer 
      items={[sampleHistoryItem, sampleHistoryItem]}
      handleHistorySelect={() => true}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
