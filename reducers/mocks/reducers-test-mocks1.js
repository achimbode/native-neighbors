export const mockData = {

    ['GET-MESSAGES']: {
        _id: '5a660ae472de605ad64a3ff9',
        address: 'Codeworks, Carrer d\'Àvila, Barcelona, Spain',
        __v: 2,
        messages: [
            {
                timestamp: 1516636910424,
                name: 'tom pruemer',
                msg: 'hello',
                from: 'tom'
            },
            {
                timestamp: 1516637558615,
                name: 'achim bode',
                msg: 'hi tom! wie geht\'s?',
                from: 'achimbode'
            }
        ]
    },

    ['SOCKET__MESSAGE']: {
        address: 'Codeworks, Carrer d\'Àvila, Barcelona, Spain',
        username: 'achimbode',
        name: 'achim bode',
        msg: 'Hello'
    },

    ['STOPPED_TYPING']: {
        username: 'achimbode',
        fname: 'achim',
        lname: 'bode',
        address: 'Codeworks, Carrer d\'Àvila, Barcelona, Spain'
    },

    ['IS_TYPING']: {
        username: 'achimbode',
        fname: 'achim',
        lname: 'bode',
        address: 'Codeworks, Carrer d\'Àvila, Barcelona, Spain'
    },

    ['SOCKET__CONNECT']: {
        details: {
            _id: '5a67009072de605ad64a3ffa',
            fname: 'horst',
            lname: 'schneider',
            username: 'horst',
            address: 'Codeworks, Carrer d\'Àvila, Barcelona, Spain',
            flat: '3',
            initials: 'HS',
            online: true,
            avatar_color: '#adffe2',
            __v: 0
        }
    },

    ['SOCKET__CONNECT2']: {
        details: {
            _id: '3a67009072de605ad64a3ffa',
            fname: 'walther',
            lname: 'vogelweyde',
            username: 'horst',
            address: 'Codeworks, Carrer d\'Àvila, Barcelona, Spain',
            flat: '4',
            initials: 'WV',
            online: true,
            avatar_color: '#ad4ae2',
            __v: 0
        }
    },

    ['USER_LOGGED_IN']: {
        details: {
            _id: '5a67009072de605ad64a3ffa',
            fname: 'horst',
            lname: 'schneider',
            username: 'horst',
            address: 'Codeworks, Carrer d\'Àvila, Barcelona, Spain',
            flat: '3',
            initials: 'HS',
            online: true,
            avatar_color: '#adffe2',
            __v: 0
        }
    }
};

export const mockActions = {

    ['GET-MESSAGES']: {
        type: 'GET-MESSAGES',
        data: mockData['GET-MESSAGES']
    },

    ['SOCKET__MESSAGE']: {
        type: 'SOCKET__MESSAGE',
        data: mockData['SOCKET__MESSAGE']
    },

    ['STOPPED_TYPING']: {
        type: 'STOPPED_TYPING',
        data: mockData['STOPPED_TYPING']
    },

    ['IS_TYPING']: {
        type: 'IS_TYPING',
        data: mockData['IS_TYPING']
    },

    ['SOCKET__CONNECT']:{
        type: 'SOCKET__CONNECT',
        data: mockData['SOCKET__CONNECT'],
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhvcnN0IiwiaWF0IjoxNTE2Njk5NzkyLCJleHAiOjE1MTkyMDE3OTJ9._vb8rwI5siN3TnrTpjN_IjRRmHcrLpyJzrgPUodduT4'
    },

    ['SOCKET__CONNECT2']:{
        type: 'SOCKET__CONNECT2',
        data: mockData['SOCKET__CONNECT2'],
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhvcnN0IiwiaWF0IjoxNTE2Njk5NzkyLCJleHAiOjE1MTkyMDE3OTJ9._vb8rwI5siN3TnrTpjN_IjRRmHcrLpyJzrgPUodduT4'
    },

    ['USER_LOGGED_IN']:{
        type: 'USER_LOGGED_IN',
        data: mockData['USER_LOGGED_IN'],
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhvcnN0IiwiaWF0IjoxNTE2Njk5NzkyLCJleHAiOjE1MTkyMDE3OTJ9._vb8rwI5siN3TnrTpjN_IjRRmHcrLpyJzrgPUodduT4'
    },

};
