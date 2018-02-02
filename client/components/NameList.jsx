import React from 'react'

const NameList = props => {
  return (
    <div>
      <h4>{props.house.houseName}</h4>
      <div className={props.house.houseName}><img className={`${props.house.houseName}img`} src={`../../images/${props.house.houseName}.png`} alt={`${props.house.houseName}crest`}/></div>
      <ul>
        {props.house.names.map((person, id) => {
          return <li key={id}>{person.name}</li>
        })}
      </ul>
    </div>
  )
}

export default NameList
