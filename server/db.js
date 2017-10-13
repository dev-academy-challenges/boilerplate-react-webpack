
module.exports = {
  getVids: getVids,
  saveVid: saveVid
}

var vids = [{
  id: 1,
  vidTitle: 'Joe\'s talk',
  vidUrl: 'https://www.youtube.com/embed/747-Q-WqLHc',
  vidPicUrl: '',
  vidDesc: 'Acme Inc.',
  commentGood: [
    {
      comment: 'That was amazing!'
    }
  ],
  commentBad: [
    {
      comment: 'That was terrible!'
    }
  ],
  knowledge: 2,
  humour: 4,
  useofBoard: 6,
  flow: 8,
  topic: 7
}, {
  id: 2,
  vidTitle: 'Richard\'s talk',
  vidUrl: 'https://www.youtube.com/embed/lTo0csITwN4',
  vidPicUrl: '',
  vidDesc: 'Acme Inc.',
  commentGood: [
    {
      comment: 'That was amazing!'
    }
  ],
  commentBad: [
    {
      comment: 'That was terrible!'
    }
  ],
  knowledge: 2,
  humour: 4,
  useofBoard: 6,
  flow: 8,
  topic: 7
}, {
  id: 3,
  vidTitle: 'Daz\'s talk',
  vidUrl: 'https://www.youtube.com/embed/uqmA4fg0zQQ',
  vidPicUrl: '',
  vidDesc: 'Acme Inc.',
  commentGood: [
    {
      comment: 'That was amazing!'
    }
  ],
  commentBad: [
    {
      comment: 'That was terrible!'
    }
  ],
  knowledge: 2,
  humour: 4,
  useofBoard: 6,
  flow: 8,
  topic: 7
}, {
  id: 4,
  vidTitle: 'Andrea\'s talk',
  vidUrl: 'https://www.youtube.com/embed/V5N0Ukb8LGg',
  vidPicUrl: '',
  vidDesc: 'Acme Inc.',
  commentGood: [
    {
      comment: 'That was amazing!'
    }
  ],
  commentBad: [
    {
      comment: 'That was terrible!'
    }
  ],
  knowledge: 2,
  humour: 4,
  useofBoard: 6,
  flow: 8,
  topic: 7
},
{
  id: 5,
  vidTitle: 'Don\'s talk',
  vidUrl: 'https://www.youtube.com/embed/9cflCyyEA2I',
  vidPicUrl: '',
  vidDesc: 'Acme Inc.',
  commentGood: [
    {
      comment: 'That was amazing! Probably the best out of any I have ever seen'
    }
  ],
  commentBad: [
    {
      comment: 'That was terrible!'
    }
  ],
  knowledge: 2,
  humour: 4,
  useofBoard: 6,
  flow: 8,
  topic: 7
}]

function getVids () {
  return vids
}

function saveVid (vid) {
  vid.id = vids.length + 1
  vids.push(vid)
}
