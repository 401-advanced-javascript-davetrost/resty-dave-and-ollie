import React from 'react';
import { shallow } from 'enzyme';
import HistoryContainer from './HistoryContainer';

describe('History Container component', () => {
  const sampleHistoryItem = {
    _id: 'xyzabc',
    url: 'random-api.com/api/characters',
    method: 'post',
    body: `{
      name: 'Garfield',
      color: 'Orange with black stripes'
    }`
  };
  it('renders the container', () => {
    const wrapper = shallow(<HistoryContainer 
      items={[sampleHistoryItem, sampleHistoryItem]}
      handleHistorySelect={() => true}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
