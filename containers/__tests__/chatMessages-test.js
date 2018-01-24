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


describe('Empty Messages', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Messages
        username={emptyProps.username}
        color={emptyProps.color}
        users={emptyProps.users}
        messages={emptyProps.messages} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
}); 

const emptyProps = {
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
      msg: '',
    },
    {
      from: 'Achim',
      msg: '',
    }
  ]
}


describe('Very Long Messages', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Messages
        username={fullProps.username}
        color={fullProps.color}
        users={fullProps.users}
        messages={fullProps.messages} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});

const fullProps = {
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
      msg: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    },
    {
      from: 'Achim',
      msg: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    }
  ]
}



