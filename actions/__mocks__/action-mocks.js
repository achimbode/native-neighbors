import _ from 'lodash';

class MockActions {
  constructor() {
    this.actions = actions
  }
  get = (type) => {
    // console.log('mockActions: type: ' + type);
    // console.log(this.actions)
    let action = _.find(this.actions, (item)=>item.type===type)
    // console.log(action)
    return action
  }
  getData = (type) => {
    let action = this.get(type)
    // console.log('mockActions.getData(): action: ' + action);
    return action.data
  }

}

const actions = [
  {"type":"USER_LOGGED_IN","interceptedAt":"socket handler","data":{"details":{"_id":"5a67009072de605ad64a3ffa","fname":"horst","lname":"schneider","username":"horst","address":"Codeworks, Carrer d'Àvila, Barcelona, Spain","flat":"3","initials":"HS","online":true,"avatar_color":"#adffe2","__v":0},"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhvcnN0IiwiaWF0IjoxNTE2NzA5OTYxLCJleHAiOjE1MTkyMTE5NjF9.hW2Na_frdM0bSAewYQeIb6MyZLJ_Bm7-mwwRIaq4rVU"}},
  {"type":"SOCKET__CONNECT","interceptedAt":"socket handler","data":{"details":{"_id":"5a67009072de605ad64a3ffa","fname":"horst","lname":"schneider","username":"horst","address":"Codeworks, Carrer d'Àvila, Barcelona, Spain","flat":"3","initials":"HS","online":true,"avatar_color":"#adffe2","__v":0},"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhvcnN0IiwiaWF0IjoxNTE2NzA5OTYxLCJleHAiOjE1MTkyMTE5NjF9.hW2Na_frdM0bSAewYQeIb6MyZLJ_Bm7-mwwRIaq4rVU"}},
  {"type":"SOCKET__GET__MESSAGES","interceptedAt":"socket handler","data":"Codeworks, Carrer d'Àvila, Barcelona, Spain"},
  {"type":"ALL_USERS","interceptedAt":"socket handler","data":[{"_id":"5a660ae472de605ad64a3ff8","fname":"tom","lname":"pruemer","username":"tom","address":"Codeworks, Carrer d'Àvila, Barcelona, Spain","flat":"2","initials":"TP","online":false,"avatar_color":"#93b1ed","__v":0},{"_id":"5a67009072de605ad64a3ffa","fname":"horst","lname":"schneider","username":"horst","address":"Codeworks, Carrer d'Àvila, Barcelona, Spain","flat":"3","initials":"HS","online":true,"avatar_color":"#adffe2","__v":0}]},
  {"type":"GET-MESSAGES","interceptedAt":"socket.on('ACTION')","data":{"_id":"5a660ae472de605ad64a3ff9","address":"Codeworks, Carrer d'Àvila, Barcelona, Spain","__v":2,"messages":[{"timestamp":1516636910424,"name":"tom pruemer","msg":"hello","from":"tom"},{"timestamp":1516637558615,"name":"achim bode","msg":"hi tom! wie geht's?","from":"achimbode"}]}}
]

module.exports = { MockActions }
