import 'react-native';
import React from 'react';
import messagesReducer from '../messages.js';
// import renderer from 'react-test-renderer';
// import { mockActions, mockData } from '../__tests__/reducers-test-mocks';
// import Store from '../__tests__/storemock.js';
import socketMiddleware from '../../middlewares/socket';
import * as actions from '../../actions/socketActions';
import * as loginActions from '../../actions/index';

let socket;
let store;

// beforeEach(() => {
//     store = new Store();
//     socket = socketMiddleware(store);
//     socket(mockActions['SOCKET__CONNECT2']);
// });

// test('returns data from GET-MESSAGES', (action) => {
//     let newState = socket(mockActions['GET-MESSAGES']);
//     expect(store.action).toBe(
//         mockData['GET-MESSAGES']
//     );
// });

// test('returns data from SOCKET__MESSAGE', (action) => {
//     let newState = messagesReducer({}, mockActions['SOCKET__MESSAGE']);
//     expect(newState).toBe(
//         mockData['SOCKET__MESSAGE']
//     );
// });

// test('returns data from STOPPED_TYPING', (action) => {
//     let newState = messagesReducer({}, mockActions['STOPPED_TYPING']);
//     expect(newState).toBe(
//         mockData['STOPPED_TYPING']
//     );
// });

// test('returns data from IS_TYPING', (action) => {
//     let newState = messagesReducer({}, mockActions['IS_TYPING']);
//     expect(newState).toBe(
//         mockData['IS_TYPING']
//     );
// });

describe('actions', () => {
    it('should create an action ', () => {
        const data = { 'details': { '_id':'5a67009072de605ad64a3ffa', 'fname':'horst', 'lname':'schneider', 'username':'horst', 'address':'Codeworks, Carrer d\'Àvila, Barcelona, Spain', 'flat':'3', 'initials':'HS', 'online':true, 'avatar_color':'#adffe2', '__v':0 }, 'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhvcnN0IiwiaWF0IjoxNTE2NzA5OTYxLCJleHAiOjE1MTkyMTE5NjF9.hW2Na_frdM0bSAewYQeIb6MyZLJ_Bm7-mwwRIaq4rVU' };
        const expectedAction = {
            type: 'SOCKET__GET__MESSAGES',
            data
        };
        expect(actions.socketGetMessages(data)).toEqual(expectedAction);
    });
});

describe('actions', () => {
    it('should create an action ', () => {
        const data = { 'details': { '_id': '5a67009072de605ad64a3ffa', 'fname': 'horst', 'lname': 'schneider', 'username': 'horst', 'address': 'Codeworks, Carrer d\'Àvila, Barcelona, Spain', 'flat': '3', 'initials': 'HS', 'online': true, 'avatar_color': '#adffe2', '__v': 0 }, 'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhvcnN0IiwiaWF0IjoxNTE2NzA5OTYxLCJleHAiOjE1MTkyMTE5NjF9.hW2Na_frdM0bSAewYQeIb6MyZLJ_Bm7-mwwRIaq4rVU' };

        const expectedAction = {
            type: 'SOCKET__CONNECT',
            data
        };
        expect(actions.socketConnect(data)).toEqual(expectedAction);
    });
});

describe('actions', () => {
    it('should create an action ', () => {
        const data = { 'details': { '_id': '5a67009072de605ad64a3ffa', 'fname': 'horst', 'lname': 'schneider', 'username': 'horst', 'address': 'Codeworks, Carrer d\'Àvila, Barcelona, Spain', 'flat': '3', 'initials': 'HS', 'online': true, 'avatar_color': '#adffe2', '__v': 0 }, 'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhvcnN0IiwiaWF0IjoxNTE2NzA5OTYxLCJleHAiOjE1MTkyMTE5NjF9.hW2Na_frdM0bSAewYQeIb6MyZLJ_Bm7-mwwRIaq4rVU' };

        const expectedAction = {
            type: 'USER_LOGGED_IN',
            data
        };
        expect(loginActions.userLoggedIn(data)).toEqual(expectedAction);
    });
});

// Example 
const testActions = [
    { 'type': 'USER_LOGGED_IN', 'data': { 'details': { '_id': '5a67009072de605ad64a3ffa', 'fname': 'horst', 'lname': 'schneider', 'username': 'horst', 'address': 'Codeworks, Carrer d\'Àvila, Barcelona, Spain', 'flat': '3', 'initials': 'HS', 'online': true, 'avatar_color': '#adffe2', '__v': 0 }, 'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhvcnN0IiwiaWF0IjoxNTE2NzA5OTYxLCJleHAiOjE1MTkyMTE5NjF9.hW2Na_frdM0bSAewYQeIb6MyZLJ_Bm7-mwwRIaq4rVU' } },
    { 'type': 'SOCKET__CONNECT', 'data': { 'details': { '_id': '5a67009072de605ad64a3ffa', 'fname': 'horst', 'lname': 'schneider', 'username': 'horst', 'address': 'Codeworks, Carrer d\'Àvila, Barcelona, Spain', 'flat': '3', 'initials': 'HS', 'online': true, 'avatar_color': '#adffe2', '__v': 0 }, 'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhvcnN0IiwiaWF0IjoxNTE2NzA5OTYxLCJleHAiOjE1MTkyMTE5NjF9.hW2Na_frdM0bSAewYQeIb6MyZLJ_Bm7-mwwRIaq4rVU' } },
    { 'type': 'SOCKET__GET__MESSAGES', 'data': 'Codeworks, Carrer d\'Àvila, Barcelona, Spain' },
    { 'type': 'ALL_USERS', 'data': [{ '_id': '5a660ae472de605ad64a3ff8', 'fname': 'tom', 'lname': 'pruemer', 'username': 'tom', 'address': 'Codeworks, Carrer d\'Àvila, Barcelona, Spain', 'flat': '2', 'initials': 'TP', 'online': false, 'avatar_color': '#93b1ed', '__v': 0 }, { '_id': '5a67009072de605ad64a3ffa', 'fname': 'horst', 'lname': 'schneider', 'username': 'horst', 'address': 'Codeworks, Carrer d\'Àvila, Barcelona, Spain', 'flat': '3', 'initials': 'HS', 'online': true, 'avatar_color': '#adffe2', '__v': 0 }] },
    { 'type': 'GET-MESSAGES', 'data': { '_id': '5a660ae472de605ad64a3ff9', 'address': 'Codeworks, Carrer d\'Àvila, Barcelona, Spain', '__v': 2, 'messages': [{ 'timestamp': 1516636910424, 'name': 'tom pruemer', 'msg': 'hello', 'from': 'tom' }, { 'timestamp': 1516637558615, 'name': 'achim bode', 'msg': 'hi tom! wie geht\'s?', 'from': 'achimbode' }] } }
];