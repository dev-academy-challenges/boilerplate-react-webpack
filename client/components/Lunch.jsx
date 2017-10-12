import React from 'react'

import data from '../../data/lunch'

const Lunch = () => {

  function values(data) {
    return Object.keys(data).map(prop => {
      return data[prop]
    })
  }
  const lunches = values(data)[0]

return (
  <div>
    <h1>TEST</h1>
    <ul>
      {lunches.map(lunch => {
        return <li key={lunch.id}>
          {lunch.name}
        </li>
      })}
    </ul>
    </div>
  )
}

export default Lunch
