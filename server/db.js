
module.exports = {
  getVids: getVids,
  saveVid: saveVid
}

var vids = [{
  id: 1,
  vidTitle: 'Joe\'s talk',
  vidUrl: 'https://www.youtube.com/embed/747-Q-WqLHc',
  vidPicUrl: '/images/horse.webp',
  vidDesc: 'Acme Inc.',
  commentGood: 'That was amazing!',
  commentBad: 'That was terrible!',
  knowledge: 3,
  humour: 7,
  useofBoard: 8,
  flow: 5,
  topic: 2
}, {
  id: 2,
  vidTitle: 'Richard\'s talk',
  vidUrl: 'https://www.youtube.com/embed/lTo0csITwN4',
  vidPicUrl: '/images/richard.gif',
  vidDesc: 'Acme Inc.',
  commentGood: 'That was amazing!',
  commentBad: 'That was terrible!',
  knowledge: 2,
  humour: 4,
  useofBoard: 6,
  flow: 8,
  topic: 7
}, {
  id: 3,
  vidTitle: 'Daz\'s talk',
  vidUrl: 'https://www.youtube.com/embed/uqmA4fg0zQQ',
  vidPicUrl: '/images/daz.gif',
  vidDesc: 'Acme Inc.',
  commentGood: 'That was amazing!',
  commentBad: 'That was terrible!',
  knowledge: 3,
  humour: 9,
  useofBoard: 8,
  flow: 2,
  topic: 4
}, {
  id: 4,
  vidTitle: 'Andrea\'s talk',
  vidUrl: 'https://www.youtube.com/embed/V5N0Ukb8LGg',
  vidPicUrl: '/images/andrea.webp',
  vidDesc: 'Acme Inc.',
  commentGood: 'That was amazing!',
  commentBad: 'That was terrible!',
  knowledge: 4,
  humour: 3,
  useofBoard: 7,
  flow: 5,
  topic: 2
},
{
  id: 5,
  vidTitle: 'Don\'s talk',
  vidUrl: 'https://www.youtube.com/embed/9cflCyyEA2I',
  vidPicUrl: '/images/don.webp',
  vidDesc: 'Acme Inc.',
  commentGood: 'That was amazing! Probably the best out of any I have ever seen',
  commentBad: 'That was terrible!',
  knowledge: 6,
  humour: 4,
  useofBoard: 9,
  flow: 2,
  topic: 4
}]

function getVids () {
  return vids
}

function saveVid (vid) {
  vid.id = vids.length + 1
  vids.push(vid)
}
