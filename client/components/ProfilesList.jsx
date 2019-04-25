import React from 'react'

import ProfilesListItem from './ProfilesListItem'

export default function ProfilesList (props) {
  return (
    <div className ='profiles-list'>
      <h2>List</h2>
      {props.profiles.map(profiles => {
        return <ProfilesListItem
          key={profiles.id}
          profiles={profiles}
          hideDetails={props.hideDetails}
          showDetails={props.showDetails}
          deleteProfiles={props.deleteProfiles}
          showEditProfiles={props.showEditProfiles} />
      })}
    </div>
  )
}
