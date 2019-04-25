import React from 'react'

export default function ProfilesDetails (props) {
  const { profiles, isVisible, hideDetails } = props
  const classes = 'profiles-details' + (isVisible ? 'visible' : 'hidden')

  return (
    <div className={classes}>
      <h2>Details</h2>
      <p>Name: {profiles.name}</p>
      <p>Age: {profiles.age}</p>
      <p>House: {profiles.house}</p>
      <p>Year: {profiles.year}</p>
      <p>Comments: {profiles.comments}</p>
      <a href= '#' onClick={hideDetails}>Close</a>
    </div>
  )
}
