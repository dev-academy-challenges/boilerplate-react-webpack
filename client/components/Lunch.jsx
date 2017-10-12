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
    <h1>The Lunch Menu</h1>
    <ul>
      {lunches.map(lunch => {
        return <li key={lunch.id}>
          <ul>
            <li>{lunch.name}</li>
            <li>{lunch.description}</li>
              <ul>
                {lunch.ingredients.map(ingredient => {
                  return <li key={ingredient.type}>
                    {ingredient.type}
                  </li>
                })}
              </ul>
          </ul>
        </li>
      })}
    </ul>
    </div>
  )
}

export default Lunch
