import React from 'react'

const NameList = props => {
  return (
    <div>
      <h4>{props.house.houseName}</h4>
      <ul>
        {props.house.names.map((person, id) => {
          return <li key={id}>{person.name}</li>
        })}
      </ul>
    </div>
  )
}

export default NameList
