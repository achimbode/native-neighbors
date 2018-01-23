import * as actions from '../socketActions';
import * as loginActions from '../index';

describe('actions', () => {
  it('should create an action ', () => {
    const data = { 'details': { '_id': '5a67009072de605ad64a3ffa', 'fname': 'horst', 'lname': 'schneider', 'username': 'horst', 'address': 'Codeworks, Carrer d\'Àvila, Barcelona, Spain', 'flat': '3', 'initials': 'HS', 'online': true, 'avatar_color': '#adffe2', '__v': 0 }, 'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhvcnN0IiwiaWF0IjoxNTE2NzA5OTYxLCJleHAiOjE1MTkyMTE5NjF9.hW2Na_frdM0bSAewYQeIb6MyZLJ_Bm7-mwwRIaq4rVU' };
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
