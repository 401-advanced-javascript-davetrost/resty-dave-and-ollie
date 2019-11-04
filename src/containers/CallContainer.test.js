import React from 'react';
import { shallow } from 'enzyme';
import CallContainer from './CallContainer';

describe('Call Container component', () => {
  it('renders the container', () => {
    const responseExampleString = `[
      {
        "_id": "5da237699734fdcb7bef8f56",
        "name": "Miles Shortman",
        "image": "https://vignette.wikia.nocookie.net/heyarnold/images/2/2e/Miles.jpg/revision/latest/scale-to-width-down/243?cb=20101115140639"
      }
    ]`;
    const wrapper = shallow(<CallContainer 
      url="random-api.com/api/characters"
      method="get"
      body=""
      response={responseExampleString}
      handleUrlChange={() => true}
      handleMethodChange={() => true}
      handleBodyChange={() => true}
      handleSubmit={() => true}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
