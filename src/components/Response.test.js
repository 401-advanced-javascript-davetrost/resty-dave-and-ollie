import React from 'react';
import { shallow } from 'enzyme';
import Response from './Response';

describe('Response component', () => {
  it('renders a response', () => {
    const responseExampleString = `[
      {
          "_id": "5da237699734fdcb7bef8f56",
          "name": "Miles Shortman",
          "image": "https://vignette.wikia.nocookie.net/heyarnold/images/2/2e/Miles.jpg/revision/latest/scale-to-width-down/243?cb=20101115140639"
      }
    ]`;
    const wrapper = shallow(<Response response={responseExampleString}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
