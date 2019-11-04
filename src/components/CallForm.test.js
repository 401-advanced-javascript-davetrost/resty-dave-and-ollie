import React from 'react';
import { shallow } from 'enzyme';
import CallForm from './CallForm';

describe('CallForm Component', () => {
  it('renders callForm', () => {
    const wrapper = shallow(<CallForm
      url="abc123"
      method="get"
      body="heyarnold.com/api/characters"
      handleUrlChange={() => true}
      handleMethodChange={() => true}
      handleBodyChange={() => true}
      handleSubmit={() => true}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
