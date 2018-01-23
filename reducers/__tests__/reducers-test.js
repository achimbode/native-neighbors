import 'react-native';
import React from 'react';
import messagesReducer from '../../reducers/messages.js';
import { MockActions } from '../../actions/__mocks__/action-mocks.js';

let mockActions

beforeEach(() => {
  mockActions = new MockActions()
});

test('GET-MESSAGES blablabla', () => {
  let action = mockActions.get('GET-MESSAGES')
  let reduced = messagesReducer({}, action)
  expect(reduced).toEqual(mockActions.getData('GET-MESSAGES'))
})
