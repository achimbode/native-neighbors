import 'react-native';
import React from 'react';
import messagesReducer from '../../reducers/messages.js';
// import renderer from 'react-test-renderer';
import { mockActions, mockData } from '../mocks/reducers-test-mocks.js';
import Store from '../mocks/storemock.js';
import socketMiddleware from '../../middlewares/socket';

let socket;
let store;

beforeEach(() => {
  store = new Store()
  socket = socketMiddleware(store)
  socket(mockActions['SOCKET__CONNECT2'])
});

test('returns data from GET-MESSAGES', (action) => {
  let newState = socket(mockActions['GET-MESSAGES'])
  expect(store.action).toBe(
    mockData['GET-MESSAGES']
  )
})

test('returns data from SOCKET__MESSAGE', (action) => {
  let newState = messagesReducer({}, mockActions['SOCKET__MESSAGE'])
  expect(newState).toBe(
    mockData['SOCKET__MESSAGE']
  )
})

test('returns data from STOPPED_TYPING', (action) => {
  let newState = messagesReducer({}, mockActions['STOPPED_TYPING'])
  expect(newState).toBe(
    mockData['STOPPED_TYPING']
  )
})

test('returns data from IS_TYPING', (action) => {
  let newState = messagesReducer({}, mockActions['IS_TYPING'])
  expect(newState).toBe(
    mockData['IS_TYPING']
  )
})
