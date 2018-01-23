import 'react-native';
import React from 'react';
import messagesReducer from '../../reducers/messages.js';
import { MockActions } from '../mocks/reducers-test-mocks.js';

let mockActions = new MockActions()

beforeEach(() => {
  // store = new Store()
  // socket = socketMiddleware(store)
  // socket(mockActions['SOCKET__CONNECT2'])
});

test('MockActions works and returns actions from GET-MESSAGES', () => {
  let action = mockActions.get('GET-MESSAGES')
  console.log('action.type: ' + action.type);
  expect(action.data._id).toMatch(/[\d\w]*/) //.toBe('5a660ae472de605ad64a3ff9')
  expect(action.data._id.length).toBeGreaterThan(20)
  expect(action.type).toMatch(/^[A-Z+-_]*$/)
})

test('MockActions works and returns data from GET-MESSAGES', () => {
  let data = mockActions.getData('GET-MESSAGES')
  // console.log(data);
  expect(data._id).toMatch(/[\d\w]*/) //.toBe('5a660ae472de605ad64a3ff9')
  expect(data._id.length).toBeGreaterThan(20)
})
