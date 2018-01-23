import _ from 'lodash';

class MockActions {
  constructor() {
    this.actions = actions
  }
  get = (type) => {
    console.log('mockActions: type: ' + type);
    console.log(this.actions)
    let action = _.find(this.actions, (item)=>item.type==="GET-MESSAGES")
    console.log(action)
    return action
  }
  getData = (type) => {
    let action = this.get(type)
    return actions.data
  }

}

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


const actions = [
  {"type":"USER_LOGGED_IN","data":{"details":{"_id":"5a67009072de605ad64a3ffa","fname":"horst","lname":"schneider","username":"horst","address":"Codeworks, Carrer d'Àvila, Barcelona, Spain","flat":"3","initials":"HS","online":true,"avatar_color":"#adffe2","__v":0},"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhvcnN0IiwiaWF0IjoxNTE2NzA5OTYxLCJleHAiOjE1MTkyMTE5NjF9.hW2Na_frdM0bSAewYQeIb6MyZLJ_Bm7-mwwRIaq4rVU"}},
  {"type":"SOCKET__CONNECT","data":{"details":{"_id":"5a67009072de605ad64a3ffa","fname":"horst","lname":"schneider","username":"horst","address":"Codeworks, Carrer d'Àvila, Barcelona, Spain","flat":"3","initials":"HS","online":true,"avatar_color":"#adffe2","__v":0},"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhvcnN0IiwiaWF0IjoxNTE2NzA5OTYxLCJleHAiOjE1MTkyMTE5NjF9.hW2Na_frdM0bSAewYQeIb6MyZLJ_Bm7-mwwRIaq4rVU"}},
  {"type":"SOCKET__GET__MESSAGES","data":"Codeworks, Carrer d'Àvila, Barcelona, Spain"},
  {"type":"ALL_USERS","data":[{"_id":"5a660ae472de605ad64a3ff8","fname":"tom","lname":"pruemer","username":"tom","address":"Codeworks, Carrer d'Àvila, Barcelona, Spain","flat":"2","initials":"TP","online":false,"avatar_color":"#93b1ed","__v":0},{"_id":"5a67009072de605ad64a3ffa","fname":"horst","lname":"schneider","username":"horst","address":"Codeworks, Carrer d'Àvila, Barcelona, Spain","flat":"3","initials":"HS","online":true,"avatar_color":"#adffe2","__v":0}]},
  {"type":"GET-MESSAGES","data":{"_id":"5a660ae472de605ad64a3ff9","address":"Codeworks, Carrer d'Àvila, Barcelona, Spain","__v":2,"messages":[{"timestamp":1516636910424,"name":"tom pruemer","msg":"hello","from":"tom"},{"timestamp":1516637558615,"name":"achim bode","msg":"hi tom! wie geht's?","from":"achimbode"}]}}
]

module.exports = { MockActions }

// export const mockData = {
//
//   ['GET-MESSAGES']: {
//     _id: '5a660ae472de605ad64a3ff9',
//     address: "Codeworks, Carrer d\'Àvila, Barcelona, Spain",
//     __v: 2,
//     messages: [
//       {
//         timestamp: 1516636910424,
//         name: 'tom pruemer',
//         msg: 'hello',
//         from: 'tom'
//       },
//       {
//         timestamp: 1516637558615,
//         name: 'achim bode',
//         msg: 'hi tom! wie geht\'s?',
//         from: 'achimbode'
//       }
//     ]
//   },
//
//   ['SOCKET__MESSAGE']: {
//     address: 'Codeworks, Carrer d\'Àvila, Barcelona, Spain',
//     username: 'achimbode',
//     name: 'achim bode',
//     msg: 'Hello'
//   },
//
//   ['STOPPED_TYPING']: {
//     username: 'achimbode',
//     fname: 'achim',
//     lname: 'bode',
//     address: 'Codeworks, Carrer d\'Àvila, Barcelona, Spain'
//   },
//
//   ['IS_TYPING']: {
//     username: 'achimbode',
//     fname: 'achim',
//     lname: 'bode',
//     address: 'Codeworks, Carrer d\'Àvila, Barcelona, Spain'
//   },
//
//   ['SOCKET__CONNECT']: {
//     details: {
//       _id: '5a67009072de605ad64a3ffa',
//       fname: 'horst',
//       lname: 'schneider',
//       username: 'horst',
//       address: 'Codeworks, Carrer d\'Àvila, Barcelona, Spain',
//       flat: '3',
//       initials: 'HS',
//       online: true,
//       avatar_color: '#adffe2',
//       __v: 0
//     }
//   },
//
//   ['SOCKET__CONNECT2']: {
//     details: {
//       _id: '3a67009072de605ad64a3ffa',
//       fname: 'walther',
//       lname: 'vogelweyde',
//       username: 'horst',
//       address: 'Codeworks, Carrer d\'Àvila, Barcelona, Spain',
//       flat: '4',
//       initials: 'WV',
//       online: true,
//       avatar_color: '#ad4ae2',
//       __v: 0
//     }
//   },
//
//   ['USER_LOGGED_IN']: {
//     details: {
//       _id: '5a67009072de605ad64a3ffa',
//       fname: 'horst',
//       lname: 'schneider',
//       username: 'horst',
//       address: 'Codeworks, Carrer d\'Àvila, Barcelona, Spain',
//       flat: '3',
//       initials: 'HS',
//       online: true,
//       avatar_color: '#adffe2',
//       __v: 0
//     }
//   }
// }
//
// export const mockActions = {
//
//   ['GET-MESSAGES']: {
//     type: 'GET-MESSAGES',
//     data: mockData['GET-MESSAGES']
//   },
//
//   ['SOCKET__MESSAGE']: {
//     type: 'SOCKET__MESSAGE',
//     data: mockData['SOCKET__MESSAGE']
//   },
//
//   ['STOPPED_TYPING']: {
//     type: 'STOPPED_TYPING',
//     data: mockData['STOPPED_TYPING']
//   },
//
//   ['IS_TYPING']: {
//     type: 'IS_TYPING',
//     data: mockData['IS_TYPING']
//   },
//
//   ['SOCKET__CONNECT']:{
//     type: 'SOCKET__CONNECT',
//     data: mockData['SOCKET__CONNECT'],
//     token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhvcnN0IiwiaWF0IjoxNTE2Njk5NzkyLCJleHAiOjE1MTkyMDE3OTJ9._vb8rwI5siN3TnrTpjN_IjRRmHcrLpyJzrgPUodduT4'
//   },
//
//   ['SOCKET__CONNECT2']:{
//     type: 'SOCKET__CONNECT2',
//     data: mockData['SOCKET__CONNECT2'],
//     token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhvcnN0IiwiaWF0IjoxNTE2Njk5NzkyLCJleHAiOjE1MTkyMDE3OTJ9._vb8rwI5siN3TnrTpjN_IjRRmHcrLpyJzrgPUodduT4'
//   },
//
//   ['USER_LOGGED_IN']:{
//     type: 'USER_LOGGED_IN',
//     data: mockData['USER_LOGGED_IN'],
//     token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhvcnN0IiwiaWF0IjoxNTE2Njk5NzkyLCJleHAiOjE1MTkyMDE3OTJ9._vb8rwI5siN3TnrTpjN_IjRRmHcrLpyJzrgPUodduT4'
//   },
//
// }
