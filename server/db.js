module.exports = {
    getVids: getVids,
    saveVid: saveVid
}

var vids = [{
        id: 1,
        vidTitle: 'Joe\s talk',
        vidUrl: '',
        vidPicUrl: '',
        vidDesc: 'Acme Inc.',
        commentGood: [{
                comment: 'That was amazing!'
            },
            {
                comment: 'That was double-amazing!'
            }
        ],
        commentBad: [{
                comment: 'That was terrible!'
            },
            {
                comment: 'That was beyond terrible!'
            }
        ],
        knowledge: 2,
        humour: 4,
        useofBoard: 6,
        flow: 8,
        topic: 7
    }, {
        id: 2,
        vidTitle: 'Joe\s talk',
        vidUrl: '',
        vidPicUrl: '',
        vidDesc: 'Acme Inc.',
        commentGood: [{
                comment: 'That was amazing!'
            },
            {
                comment: 'That was double-amazing!'
            }
        ],
        commentBad: [{
                comment: 'That was terrible!'
            },
            {
                comment: 'That was beyond terrible!'
            }
        ],
        knowledge: 2,
        humour: 4,
        useofBoard: 6,
        flow: 8,
        topic: 7
    },
    {
        id: 3,
        vidTitle: 'Joe\s talk',
        vidUrl: '',
        vidPicUrl: '',
        vidDesc: 'Acme Inc.',
        commentGood: [{
                comment: 'That was amazing!'
            },
            {
                comment: 'That was double-amazing!'
            }
        ],
        commentBad: [{
                comment: 'That was terrible!'
            },
            {
                comment: 'That was beyond terrible!'
            }
        ],
        knowledge: 2,
        humour: 4,
        useofBoard: 6,
        flow: 8,
        topic: 7
    }, {
        id: 4,
        vidTitle: 'Joe\s talk',
        vidUrl: '',
        vidPicUrl: '',
        vidDesc: 'Acme Inc.',
        commentGood: [{
                comment: 'That was amazing!'
            },
            {
                comment: 'That was double-amazing!'
            }
        ],
        commentBad: [{
                comment: 'That was terrible!'
            },
            {
                comment: 'That was beyond terrible!'
            }
        ],
        knowledge: 2,
        humour: 4,
        useofBoard: 6,
        flow: 8,
        topic: 7
    }
]

function getVids() {
    return vids
}

function saveVid(vid) {
    vid.id = vids.length + 1
    vids.push(vid)
}