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
    <h1>The Lunch Menu</h1>

      {lunches.map(lunch => {
        return <li key={lunch.id}>
            <Link to={`/lunch/${lunches}`}>{lunches}</Link>
          </li>

      })}

      </div>
  )
}

export default Lunch
