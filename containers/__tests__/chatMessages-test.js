import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Messages from '../ChatMessages';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Messages', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Messages 
        username={dummyProps.username}
        color={dummyProps.color}
        users={dummyProps.users}
        messages={dummyProps.messages} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
}); 


const dummyProps = {
  username: 'Andrea',
  color: 'fuchsia',
  users: {

    'Andrea': {
      avatar_color: 'navy'
    }
    ,
    'Achim': {
      avatar_color: 'navy'
    },
  },
  messages: [
    {
      from: 'Andrea',
      msg: 'hello Achim',
    },
    {
      from: 'Achim',
      msg: 'hello Andrea',
    }
  ]
}