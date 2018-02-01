import React from 'react'

const NameList = props => {
  return (
    <ul>
      {props.names.map((person, id) => {
        return <li key={id}>{person.name}</li>
      })}
    </ul>
  )
}

export default NameList
