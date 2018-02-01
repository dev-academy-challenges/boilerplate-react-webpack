// Note:
// To add right arrow after startDates, use \u2192

export const starSigns = [
  {
    id: 1,
    sign: 'Aries',
    startDate: 'Mar 21'
  },
  {
    id: 2,
    sign: 'Taurus',
    startDate: 'Apr 20'
  },
  {
    id: 3,
    sign: 'Gemini',
    startDate: 'May 21'
  },
  {
    id: 4,
    sign: 'Cancer',
    startDate: 'Jun 21'
  },
  {
    id: 5,
    sign: 'Leo',
    startDate: 'Jul 23'
  },
  {
    id: 6,
    sign: 'Virgo',
    startDate: 'Aug 23'
  },
  {
    id: 7,
    sign: 'Libra',
    startDate: 'Sep 23'
  },
  {
    id: 8,
    sign: 'Scorpio',
    startDate: 'Oct 23'
  },
  {
    id: 9,
    sign: 'Sagittarius',
    startDate: 'Nov 22'
  },
  {
    id: 10,
    sign: 'Capricorn',
    startDate: 'Dec 22'
  },
  {
    id: 11,
    sign: 'Aquarius',
    startDate: 'Jan 20'
  },
  {
    id: 12,
    sign: 'Pisces',
    startDate: 'Feb 19'
  }
]

// Building the select structure in React:
//  <select
//    name='starSigns'
//    placeholder='Please select...'
//    className=''
//    onChange='handleSelect'>
//  starSigns.options.map(opt => {
//    <option
//      key={opt.id}
//      value={opt.id}>
//      {`${opt.sign} (${opt.startDate}\u2192)`}
//    </option>
//  </select>
//})
